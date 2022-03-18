import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PointCreateComponent } from './components/point-create/point-create.component';

const routes: Routes = [
  { path: 'point-create', component: PointCreateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
