import { Component, OnInit } from '@angular/core';
import Todo from 'src/app/models/todo.model';
import { TodosService } from 'src/app/services/todos.service';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];

  constructor(private todoService: TodosService) { }

  ngOnInit(): void {
    this.todoService.getAllTodos().subscribe((todos) =>
      this.todos = todos
    );
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(i => i.id !== id);
  }

}
