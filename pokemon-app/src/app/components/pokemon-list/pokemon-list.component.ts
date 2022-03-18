import { Component, OnInit } from '@angular/core';
import Pokemon from 'src/app/models/pokemon.model';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { catchError  } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

//public  pokemon: Pokemon={
//  id:1,
//  name:"kazkas",
//  weight:30
//};


public pokemons:Pokemon[]=[];

  constructor(private pokemonService: PokemonsService) { 
    
  }
    errorMsg: string="";
  ngOnInit(): void {
    
    const array:number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,1000]
    array.forEach(element => {
      this.pokemonService.getPokemon(element.toString()).pipe(
        catchError(error => {
          this.errorMsg = error.message;
          return of([]);
      })
      )
        this.pokemonService.getPokemon(element.toString()).subscribe((pokemon) =>
        this.pokemons.push(pokemon)).
    });   
  }

}
