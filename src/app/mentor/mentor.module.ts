import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MentorRoutingModule } from './mentor-routing.module';
import { ApplycoursesComponent } from './applycourses/applycourses.component';
import { MycoursesComponent } from './mycourses/mycourses.component';
import { MentornavComponent } from './mentornav/mentornav.component';
import { MentorfootComponent } from './mentorfoot/mentorfoot.component';
import { MentorComponent } from './mentor.component';

import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { NgxLoadingModule } from 'ngx-loading';
import { DataTableModule } from 'angular7-data-table';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FileSelectDirective } from 'ng2-file-upload';


@NgModule({
  declarations: [FileSelectDirective, MentorComponent, ApplycoursesComponent, MycoursesComponent, MentornavComponent, MentorfootComponent],
  imports: [
    CommonModule,
    MentorRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MDBBootstrapModule.forRoot(),
    NgxLoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    }),
    DataTableModule.forRoot(),
  ]
})
export class MentorModule { }
