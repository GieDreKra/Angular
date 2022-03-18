import { Component, OnInit, Output } from '@angular/core';
import SchoolCreate from 'src/app/models/school-create.model';
import School from 'src/app/models/school.model';
import StudentCreate from 'src/app/models/student-create.model';
import Student from 'src/app/models/student.model';
import { SchoolsService } from 'src/app/services/schools.service';
import { StudentsService } from 'src/app/services/students.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  public schools: School[] = [];

  public students: Student[] = [];

  constructor(private schoolsService: SchoolsService, private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.schoolsService.getAll().subscribe((school) =>
      this.schools = school
    )
    this.studentsService.getAll().subscribe((student) =>
      this.students = student
    )
  }

  public removeSchool(removeSchoolEvent: any): void {
    this.schoolsService.delete(removeSchoolEvent).subscribe((schoolId) => {
      this.schools = this.schools.filter(t => t.id != removeSchoolEvent)
      this.students = this.students.filter(t => t.schoolId != removeSchoolEvent)
    },
      (error) => { console.log("Error delete"); });
  }

  public createSchool(schoolEvent: any): void {
    let createSchool: SchoolCreate = {
      name: schoolEvent
    }
    this.schoolsService.create(createSchool).subscribe((schoolId) => {
      let school: School = {
        id: schoolId,
        name: createSchool.name
      }
      this.schools.push(school);
    }, (error => { console.log("Error create"); }))

  }

  public removeStudent(removeStudentEvent: number): void {
    this.studentsService.delete(removeStudentEvent).subscribe((studentId) => {
      this.students = this.students.filter(t => t.id != removeStudentEvent)
    },
      (error) => { console.log("Error delete"); });
  }

  public createStudent(createStudentEvent: StudentCreate): void {

    let createStudent: StudentCreate = {
      name: createStudentEvent.name,
      surname: createStudentEvent.surname,
      schoolId: createStudentEvent.schoolId
    }

    this.studentsService.create(createStudent).subscribe((studentId) => {
      let student: Student = {
        id: studentId,
        name: createStudent.name,
        surname: createStudent.surname,
        schoolId: createStudent.schoolId,
        school: this.schools.filter(t => t.id == createStudent.schoolId)[0].name
      }
      this.students.push(student);
    }, (error => { console.log("Error create"); }))

  }

}
