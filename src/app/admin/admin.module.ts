import { AdminComponent } from './admin.component';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule } from '@angular/forms';

import { AdminRoutingModule } from './admin-routing.module';
import { UsermanageComponent } from './usermanage/usermanage.component';
import { CoursemanageComponent } from './coursemanage/coursemanage.component';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { FooterComponent } from 'src/app/footer/footer.component';
import { NgxLoadingModule } from 'ngx-loading';
import { DataTableModule } from 'angular7-data-table';

@NgModule({
  declarations: [
    AdminComponent,
    UsermanageComponent,
    CoursemanageComponent,
    NavbarComponent,
    FooterComponent],
  imports: [
    FormsModule,
    DataTableModule.forRoot(),
    CommonModule,
    AdminRoutingModule,
    MDBBootstrapModule.forRoot(),
    NgxLoadingModule.forRoot({
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff',
      secondaryColour: '#ffffff',
      tertiaryColour: '#ffffff'
    })
  ]
})
export class AdminModule { }
