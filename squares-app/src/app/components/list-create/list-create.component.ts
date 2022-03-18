import { Component, OnInit } from '@angular/core';
import PointsListCreate from 'src/app/models/list-create.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css']
})
export class ListCreateComponent implements OnInit {

  public listName: string = "";

  constructor(private stateService: StateService) {
    console.log("constructor init");
  }

  ngOnInit(): void {
    console.log("list create init");
  }

  public createList() {
    console.log("press create");
    let listCreate: PointsListCreate = {
      name: this.listName
    }

    this.stateService.create(listCreate);
    this.listName = '';
  }
}
