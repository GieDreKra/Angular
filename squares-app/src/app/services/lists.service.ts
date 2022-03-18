import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PointsListCreate from '../models/list-create.model';
import PointsList from '../models/list.model';
import Point from '../models/point.model';

@Injectable({
  providedIn: 'root'
})
export class ListsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<PointsList[]> {
    return this.httpClient.get<PointsList[]>('https://localhost:7225/pointslist');
  }

  public getById(id:number): Observable<Point[]> {
    return this.httpClient.get<Point[]>(`https://localhost:7225/pointslist/${id}/points`);
  }

  public getByIdSquares(id:number): Observable<Point[]> {
    return this.httpClient.get<Point[]>(`https://localhost:7225/pointslist/${id}/squares`);
  }
 
  public create(listCreate: PointsListCreate): Observable<PointsList> {
    return this.httpClient.post<PointsList>('https://localhost:7225/pointslist', listCreate);
  }

  public delete(id: number):Observable<any> {
    console.log(`https://localhost:7225/pointslist/${id}`);
    return this.httpClient.delete<any>(`https://localhost:7225/pointslist/${id}`);
  }
}
