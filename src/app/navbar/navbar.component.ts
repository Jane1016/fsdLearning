import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  notLogin = true;
  currentUser;

  constructor() { }

  ngOnInit() {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if ( this.currentUser ) {
      this.notLogin = false;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
    window.location.href = 'home';
  }

}
