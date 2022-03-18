import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import SchoolCreate from '../models/school-create.model';
import { Observable } from 'rxjs';
import School from '../models/school.model';

@Injectable({
  providedIn: 'root'
})
export class SchoolsService {

  constructor(private httpClient:HttpClient) { }

  public create(schoolCreate: SchoolCreate): Observable<number> {
    return this.httpClient.post<number>('https://localhost:7273/school', schoolCreate);
  }

  public getAll():Observable<School[]>{
    return this.httpClient.get<School[]>('https://localhost:7273/school');
  }

  public delete(id:number):Observable<any>{
    return this.httpClient.delete(`https://localhost:7273/school/${id}`);
  }
}
