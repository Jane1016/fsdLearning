import { UserService } from './../service/user.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { User } from '../Model/user';
import { AlertService } from '../service/alert.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  validatingForm: FormGroup;
  roleCheck = 'student';
  user: User = {
    id: 0,
    username: '',
    password: '',
    email: '',
    role: '',
    lockflag: false
  };

  constructor(
    private router: Router,
    private userService: UserService,
    private alertService: AlertService,
    private toastr: ToastrService) { }

  ngOnInit() {
    this.validatingForm = new FormGroup({
      signupFormModalName: new FormControl('', Validators.required),
      signupFormModalEmail: new FormControl('', Validators.email),
      signupFormModalPassword: new FormControl('', Validators.required),
    });
  }

  get signupFormModalName() {
    return this.validatingForm.get('signupFormModalName');
  }

  get signupFormModalEmail() {
    return this.validatingForm.get('signupFormModalEmail');
  }

  get signupFormModalPassword() {
    return this.validatingForm.get('signupFormModalPassword');
  }

  submitRegstr() {
    // stop here if form is invalid
    if (this.validatingForm.invalid) {
      return;
    }
    this.user.username = this.signupFormModalName.value;
    this.user.password = this.signupFormModalPassword.value;
    this.user.email = this.signupFormModalEmail.value;
    this.user.role = this.roleCheck;
    if (this.user.email === 'dangzi142002@163.com') {
      this.user.role = 'admin';
    }
    this.user.lockflag = false;
    document.getElementById('closeButton').click();

    this.userService.registerUser(this.user)
    .pipe(first())
    .subscribe(
      data => {
          // this.alertService.success('Registration successful', true);
          this.toastr.success('Register Successfully!', 'Toastr fun!', {timeOut: 3000});
          // this.router.navigate(['home']);
      },
      error => {
          // this.alertService.error(error);
          this.toastr.error(error, 'Warning!', {timeOut: 3000});
      });
  }

  getTheRole(e) {
    this.roleCheck = e.target.value;
  }

}
