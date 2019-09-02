import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studenthead',
  templateUrl: './studenthead.component.html',
  styleUrls: ['./studenthead.component.scss']
})

export class StudentheadComponent implements OnInit {
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

