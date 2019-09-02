import { StudentComponent } from './student.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { StudentRoutingModule } from './student-routing.module';
import { CoursehoneComponent } from './coursehone/coursehone.component';
import { MycourseComponent } from './mycourse/mycourse.component';
import { NgxLoadingModule } from 'ngx-loading';
import { DataTableModule } from 'angular7-data-table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { StudentheadComponent } from './studenthead/studenthead.component';
import { StudentfootComponent } from './studentfoot/studentfoot.component';


@NgModule({
  declarations: [CoursehoneComponent, MycourseComponent, StudentComponent, StudentheadComponent, StudentfootComponent],
  imports: [
    FormsModule,
    MDBBootstrapModule.forRoot(),
    NgxLoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    DataTableModule.forRoot(),
    CommonModule,
    StudentRoutingModule
  ]
})
export class StudentModule { }
