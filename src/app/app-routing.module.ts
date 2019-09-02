import { LoginGuard } from './guard/login.guard';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

const appRoutes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'student', loadChildren: '../app/student/student.module#StudentModule', canActivate: [LoginGuard]},
  {path: 'mentor', loadChildren: '../app/mentor/mentor.module#MentorModule', canActivate: [LoginGuard]},
  {path: 'admin', loadChildren: '../app/admin/admin.module#AdminModule', canActivate: [LoginGuard]},
  {path: '**', component: NotfoundpageComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
