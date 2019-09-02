import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentornav',
  templateUrl: './mentornav.component.html',
  styleUrls: ['./mentornav.component.scss']
})
export class MentornavComponent implements OnInit {
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

