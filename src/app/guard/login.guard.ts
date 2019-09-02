import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { User } from '../Model/user';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class LoginGuard implements CanActivate {

    constructor(public router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const userStr = localStorage.getItem('currentUser');

        const user: User = JSON.parse(userStr);
        if (user && user.role) {
            console.log('路由守卫验证通过!');
            return true;
        } else {
            console.log('路由守卫验证失败!');
            this.router.navigateByUrl('home');
            return false;
        }

    }
}
