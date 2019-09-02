import { CoursemanageComponent } from './coursemanage/coursemanage.component';
import { AdminGuard } from './../guard/admin.guard';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '', redirectTo: 'user', canActivate: [AdminGuard] },
      { path: 'user', component: UsermanageComponent, canActivate: [AdminGuard] },
      { path: 'course', component: CoursemanageComponent, canActivate: [AdminGuard] },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
