import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Pokemon from '../models/pokemon.model';
import { catchError  } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  constructor(private httpClient:HttpClient) { }




  public getPokemon(i:string):Observable<Pokemon>{
    //errorMsg: string;
     return this.httpClient.get<Pokemon>("https://pokeapi.co/api/v2/pokemon/".concat(i)).
    pipe(
      catchError(error => {
        let errorMsg: string;
        if (error.error instanceof ErrorEvent) {
            this.errorMsg = `Error: ${error.error.message}`;
        } else {
            this.errorMsg = this.getServerErrorMessage(error);
        }

        //return throwError(errorMsg);
      }))   
    ;
  }

  private getServerErrorMessage(error: HttpErrorResponse): string {
    switch (error.status) {
        case 404: {
            return `Not Found: ${error.message}`;
        }
        case 403: {
            return `Access Denied: ${error.message}`;
        }
        case 500: {
            return `Internal Server Error: ${error.message}`;
        }
        default: {
            return `Unknown Server Error: ${error.message}`;
        }

    }
}

}
