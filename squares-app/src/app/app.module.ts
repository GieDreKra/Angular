import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCreateComponent } from './components/list-create/list-create.component';
import { FormsModule } from '@angular/forms';
import { PointsListsComponent } from './components/points-lists/points-lists.component';
import { PointCreateComponent } from './components/point-create/point-create.component';
import { PointsComponent } from './components/points/points.component';
import { PointsSquaresComponent } from './components/points-squares/points-squares.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCreateComponent,
    PointsListsComponent,
    PointCreateComponent,
    PointsComponent,
    PointsSquaresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
