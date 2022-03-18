import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import School from 'src/app/models/school.model';

@Component({
  selector: 'app-schools',
  templateUrl: './schools.component.html',
  styleUrls: ['./schools.component.css']
})
export class SchoolsComponent implements OnInit {

  constructor() { }

  @Input() schoolsInput: School[] = [];
  @Output() removeSchoolEvent = new EventEmitter<number>();
  @Output() schoolCreateEvent = new EventEmitter<string>();
  ngOnInit(): void {
  }

  ngOnChanges(): void {
  }

  public createSchool(schoolEvent: any): void {
    this.schoolCreateEvent.emit(schoolEvent);
  }

  public removeSchool(id: number) {
    this.removeSchoolEvent.emit(id);
  }
}
