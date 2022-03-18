import { Component, Input, OnInit } from '@angular/core';
import PointsList from 'src/app/models/list.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-points-lists',
  templateUrl: './points-lists.component.html',
  styleUrls: ['./points-lists.component.css']
})
export class PointsListsComponent implements OnInit {

  @Input() listsInput: PointsList[] = []


  constructor(private stateService: StateService) {
    console.log("constructor create");
  }

  ngOnInit(): void {
    console.log("list init");
    this.stateService.loadAll();

    this.stateService.pointsLists$.subscribe((lists) => {
      this.listsInput = lists;
    })
  }

  public removeList(id: number) {
    this.stateService.delete(id);
  }

  public selectList(id: number,count:number) {
    this.stateService.errorMsg="";
    this.stateService.loadPoints(id,count);
  }

}
