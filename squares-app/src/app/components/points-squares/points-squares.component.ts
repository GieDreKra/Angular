import { Component, Input, OnInit } from '@angular/core';
import Point from 'src/app/models/point.model';
import { StateService } from 'src/app/services/state.service';

@Component({
  selector: 'app-points-squares',
  templateUrl: './points-squares.component.html',
  styleUrls: ['./points-squares.component.css']
})
export class PointsSquaresComponent implements OnInit {

  @Input() pointsInput: Point[] = []

  constructor(private stateService: StateService) { }

  ngOnInit(): void {
    console.log("square");
    //this.stateService.loadAllPoints();

    this.stateService.points2$.subscribe((p) => {
      console.log("square init2");
      this.pointsInput = p;

    })
  }

}
