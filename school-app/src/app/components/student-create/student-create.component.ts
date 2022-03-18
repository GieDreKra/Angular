import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';
import StudentCreate from 'src/app/models/student-create.model';

@Component({
  selector: 'app-student-create',
  templateUrl: './student-create.component.html',
  styleUrls: ['./student-create.component.css']
})
export class StudentCreateComponent implements OnInit {

  public studentName: string = "";
  public studentSurname: string = "";
  public schoolId: number = 0;
  public school: number = 0;

  @Input() schoolsInput: School[] = [];

  @Output() studentCreateEvent = new EventEmitter<StudentCreate>();

  constructor() { }

  ngOnInit(): void {
  }

  public createStudent() {
    let student: StudentCreate = {
      name: this.studentName,
      surname: this.studentSurname,
      schoolId: this.schoolId
    };
    this.studentCreateEvent.emit(student);
  }

}
