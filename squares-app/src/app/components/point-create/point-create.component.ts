import { Component, Input, OnInit } from '@angular/core';
import PointCreate from 'src/app/models/point-create.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-point-create',
  templateUrl: './point-create.component.html',
  styleUrls: ['./point-create.component.css']
})
export class PointCreateComponent implements OnInit {

  public x:number=0;
  public y:number=0;
  public listId:number=0;

  @Input() selectedListCount: number = 0;

  @Input() errorMsg: string = "";

  constructor(private stateService:StateService) {
    console.log(this.stateService.selectedListCount);
  }

  ngOnInit(): void {
    console.log(this.stateService.selectedListCount);
  }


  public createPoint() {
    console.log("press create"+this.errorMsg);
    this.stateService.errorMsg=""
    let pointCreate: PointCreate = {
      x: this.x,
      y:this.y,
      pointsListId:this.stateService.selectedList
    }

    this.stateService.createPoint(pointCreate).add(()=>{
     // this.stateService.errorMsg="";
      this.x = 0;
      this.y = 0;
    });


    
  }

}
