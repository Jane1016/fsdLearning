import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// used to create fake backend
import { fakeBackendProvider } from './helpers';
// used to create authguard
import { LoginGuard, AdminGuard, MentorGuard, StudentGuard } from './guard';

import { JwtInterceptor, ErrorInterceptor } from './helpers';

import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './alert/alert.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { NotfoundpageComponent } from './notfoundpage/notfoundpage.component';

// Importing the Services
import { AlertService } from './service/alert.service';
import { AuthenticationService } from './service/authentication.service';
import { UserService } from './service/user.service';



@NgModule({
  declarations: [
    AppComponent,
    AlertComponent,
    HomeComponent,
    RegisterComponent,
    NotfoundpageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AlertService,
    AuthenticationService,
    UserService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    // provider used to create fake backend
    fakeBackendProvider,
    LoginGuard, AdminGuard, MentorGuard, StudentGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
