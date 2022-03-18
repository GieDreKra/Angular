import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import PointCreate from '../models/point-create.model';
import Point from '../models/point.model';

@Injectable({
  providedIn: 'root'
})
export class PointsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Point[]> {
    return this.httpClient.get<Point[]>('https://localhost:7225/point');
  }

  
 
  public create(listCreate: PointCreate): Observable<Point> {
    return this.httpClient.post<Point>('https://localhost:7225/point', listCreate);
  }

  public delete(id: number):Observable<any> {
    return this.httpClient.delete<any>(`https://localhost:7225/point/${id}`);
  }
}
