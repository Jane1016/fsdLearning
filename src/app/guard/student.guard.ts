import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../Model/user';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class StudentGuard implements CanActivate {

    constructor(
      public router: Router,
      private toastr: ToastrService) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const userStr = localStorage.getItem('currentUser');

        const user: User = JSON.parse(userStr);
        if (user && user.role === 'student') {
            console.log('student guard pass!');
            return true;
        } else {
          this.toastr.error('Login first and make sure you are student', 'Major Error', {
            timeOut: 3000
          });
          this.router.navigateByUrl('home');
          return false;
        }

    }
}
