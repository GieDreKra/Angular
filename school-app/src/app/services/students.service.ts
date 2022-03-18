import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import StudentCreate from '../models/student-create.model';
import Student from '../models/student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private httpClient: HttpClient) { }

  public getAll(): Observable<Student[]> {
    return this.httpClient.get<Student[]>("https://localhost:7273/student");
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete(`https://localhost:7273/student/${id}`)
  }

  //public deleteBySchool(id: number): Observable<any> {
  //  let students: Student[] = [];
  //  this.getAll().subscribe((student) => {
  //    students = student.filter(i => i.schoolId == id);
  //  });
  //  return this.httpClient.delete(`https://localhost:7273/student/${id}`)
 // }

  public create(studentCreate: StudentCreate): Observable<number> {
    console.log(studentCreate.name);
    return this.httpClient.post<number>('https://localhost:7273/student', studentCreate);
  }
}
