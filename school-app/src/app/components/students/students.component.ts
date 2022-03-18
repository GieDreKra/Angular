import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import StudentCreate from 'src/app/models/student-create.model';
import Student from 'src/app/models/student.model';
import { SchoolsService } from 'src/app/services/schools.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: Student[] = [];
  @Input() schoolsInput: School[] = [];
  @Input() studentsInput: Student[] = [];
  @Output() removeStudentEvent = new EventEmitter<number>();
  @Output() studentCreateEvent = new EventEmitter<StudentCreate>();

  constructor() { }

  ngOnInit(): void {
  }

  public removeStudent(removeStudentEvent: number): void {
    this.removeStudentEvent.emit(removeStudentEvent);
  }

  public createStudent(createStudentEvent: StudentCreate): void {
    this.studentCreateEvent.emit(createStudentEvent);
  }
}


