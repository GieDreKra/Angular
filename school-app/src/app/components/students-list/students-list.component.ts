import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import Student from 'src/app/models/student.model';


@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})

export class StudentsListComponent implements OnInit {
  @Input() studentsInput: Student[] = [];
  @Output() removeStudentEvent = new EventEmitter<number>();
  
  constructor() { }

  ngOnInit(): void {
  }

  public removeStudent(id: number) {
    this.removeStudentEvent.emit(id);
  }

}
