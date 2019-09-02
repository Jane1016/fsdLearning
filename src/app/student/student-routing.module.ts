import { MycourseComponent } from './mycourse/mycourse.component';
import { StudentComponent } from './student.component';
import { CoursehoneComponent } from './coursehone/coursehone.component';
import { StudentGuard } from './../guard/student.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: StudentComponent,
    children: [
      { path: '', redirectTo: 'coursehome', canActivate: [StudentGuard] },
      { path: 'coursehome', component: CoursehoneComponent, canActivate: [StudentGuard] },
      { path: 'mycourse', component: MycourseComponent, canActivate: [StudentGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
