import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';

@Component({
  selector: 'app-school-create',
  templateUrl: './school-create.component.html',
  styleUrls: ['./school-create.component.css']
})

export class SchoolCreateComponent implements OnInit {

  public schoolName: string = "";

  @Output() schoolCreateEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public createSchool() {
    this.schoolCreateEvent.emit(this.schoolName);
  }
}
