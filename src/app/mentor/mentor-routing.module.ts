import { MycoursesComponent } from './mycourses/mycourses.component';
import { ApplycoursesComponent } from './applycourses/applycourses.component';
import { MentorComponent } from './mentor.component';
import { NgModule } from '@angular/core';
import { MentorGuard } from './../guard/mentor.guard';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: MentorComponent,
    children: [
      { path: '', redirectTo: 'mycourses', canActivate: [MentorGuard] },
      { path: 'coursehandle', component: ApplycoursesComponent, canActivate: [MentorGuard] },
      { path: 'mycourses', component: MycoursesComponent, canActivate: [MentorGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MentorRoutingModule { }
