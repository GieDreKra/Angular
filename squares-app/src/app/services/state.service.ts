import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of } from 'rxjs';
import PointsListCreate from '../models/list-create.model';
import PointCreate from '../models/point-create.model';
import Point from '../models/point.model';
import PointsList from '../models/list.model';
import { ListsService } from './lists.service';
import { PointsService } from './points.service';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  public pointsLists$ = new BehaviorSubject<PointsList[]>([]);
  private pointsLists: PointsList[] = [];

  public points$ = new BehaviorSubject<Point[]>([]);
  private points: Point[] = [];

  public points2$ = new BehaviorSubject<Point[]>([]);
  private points2: Point[] = [];

  public selectedList: number = 0;
  public selectedListCount: number = 0;

  public errorMsg: string = "";

  constructor(private listsService: ListsService, private pointsService: PointsService) { }

  public loadAll() {
    this.listsService.getAll().subscribe((lists) => {
      this.pointsLists = lists;
      this.pointsLists$.next(this.pointsLists);
    });
  }

  //public loadAllPoints() {
  //  this.pointsService.getAll().subscribe((p) => {
  //    this.points = p;
  //    this.points$.next(this.points);
  //  });
 // }

  public loadPoints(id: number, count: number) {
    this.listsService.getById(id).subscribe((p) => {
      this.points = p;
      this.selectedList = id;
      this.selectedListCount = count;      
      this.points$.next(this.points);
    });
    this.listsService.getByIdSquares(id).subscribe((p) => {
      this.points2 = p;   
      this.points2$.next(this.points2);
    });
  }

  //public loadSquaresPoints(id: number) {
    
  //}

  public create(listCreate: PointsListCreate) {
    this.listsService.create(listCreate).subscribe((list) => {
      this.pointsLists.push(list);
      this.loadAll();
      this.pointsLists$.next(this.pointsLists);
    });
  }

  public createPoint(pointCreate: PointCreate) {

    return this.pointsService.create(pointCreate).subscribe((p) => {
      this.points.push(p);
     // this.loadSquaresPoints(this.selectedList);
      this.loadPoints(this.selectedList, this.selectedListCount + 1);
      this.loadAll();
      this.points$.next(this.points);
    },
      (error: HttpErrorResponse) => {
       // this.loadSquaresPoints(this.selectedList);
        this.loadPoints(this.selectedList, this.selectedListCount );
        this.errorMsg = error.error;
        console.log(error.error)
      });
  }


  public delete(id: number) {
    this.listsService.delete(id).subscribe(() => {
      this.pointsLists = this.pointsLists.filter((t) => t.id !== id);
      this.pointsLists$.next(this.pointsLists);
    //  this.loadSquaresPoints(this.selectedList);
    this.loadAll();
      this.loadPoints(this.selectedList, this.selectedListCount);
    });
  }

  public deletePoint(id: number) {
    this.pointsService.delete(id).subscribe(() => {
      this.points = this.points.filter((t) => t.id !== id);
      this.selectedListCount = this.selectedListCount - 1;
      this.loadAll();
      this.loadPoints(this.selectedList, this.selectedListCount);
      this.points$.next(this.points);
    });
  }
}

