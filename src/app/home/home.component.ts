import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../service/alert.service';
import { AuthenticationService } from '../service/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from '../Model/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  validatingForm: FormGroup;
  user: User;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      loginFormModalEmail: new FormControl('', Validators.email),
      loginFormModalPassword: new FormControl('', Validators.required)
    });
  }

  get loginFormModalEmail() {
    return this.validatingForm.get('loginFormModalEmail');
  }

  get loginFormModalPassword() {
    return this.validatingForm.get('loginFormModalPassword');
  }

  loginSubmit() {
    if (this.validatingForm.invalid) {
      return;
    }
    this.authenticationService.login(this.loginFormModalEmail.value, this.loginFormModalPassword.value)
    .pipe(first())
    .subscribe(
        data => {
          this.toastr.success('Login Successfully!', 'Success', {timeOut: 3000});
          const userStr = localStorage.getItem('currentUser');
          const user: User = JSON.parse(userStr);
          if ( user.role === 'student' ) {
            this.router.navigateByUrl('/student');
          } else if ( user.role === 'mentor' ) {
            this.router.navigateByUrl('/mentor');
          } else if ( user.role === 'admin' ) {
            this.router.navigateByUrl('/admin');
          } else {
            this.toastr.error('Role Error!', 'Error', {timeOut: 3000});
          }

          // window.location.href = 'home';
      },
      error => {
        this.toastr.error(error, 'Error', {
          timeOut: 3000 });
          // this.alertService.error(error);
      });
  }


}
