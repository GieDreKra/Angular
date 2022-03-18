import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';

@Component({
  selector: 'app-schools-list',
  templateUrl: './schools-list.component.html',
  styleUrls: ['./schools-list.component.css']
})
export class SchoolsListComponent implements OnInit {

  constructor() { }

  @Input() schoolsInput: School[] = [];
  @Output() removeSchoolEvent = new EventEmitter<number>();
  @Output() removeStudentEvent = new EventEmitter<number>();

  ngOnInit(): void {
  }

  public removeSchool(id: number) {
    this.removeSchoolEvent.emit(id);
  }

}
