import { Component, Input, OnInit } from '@angular/core';
import Point from 'src/app/models/point.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent implements OnInit {

  @Input() pointsInput: Point[] = []
  @Input() pointsCountInput: number=0
  @Input() errorMsg: string="";
  
  constructor(private stateService:StateService) { }

  ngOnInit(): void {
    console.log("point init");
    //this.stateService.loadAllPoints();
    
    this.stateService.points$.subscribe((p)=>{
      console.log("point init2");
      this.pointsInput=p;
      this.errorMsg = this.stateService.errorMsg;
      this.pointsCountInput = this.stateService.selectedListCount;
      
    })


    
  }

  public removePoint(id: number) {
    this.stateService.deletePoint(id);
  }

}
