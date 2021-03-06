import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Todo from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) {

  }

  public getAllTodos(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>("https://jsonplaceholder.typicode.com/todos");
  }
}
