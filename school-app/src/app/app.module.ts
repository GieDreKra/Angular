import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SchoolCreateComponent } from './components/school-create/school-create.component';
import { SchoolsComponent } from './components/schools/schools.component';
import { SchoolsListComponent } from './components/schools-list/schools-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StudentsComponent } from './components/students/students.component';
import { StudentsListComponent } from './components/students-list/students-list.component';
import { StudentCreateComponent } from './components/student-create/student-create.component';
import { MainComponent } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    SchoolCreateComponent,
    SchoolsComponent,
    SchoolsListComponent,
    StudentsComponent,
    StudentsListComponent,
    StudentCreateComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
