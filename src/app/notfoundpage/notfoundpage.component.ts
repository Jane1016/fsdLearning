import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notfoundpage',
  templateUrl: './notfoundpage.component.html',
  styleUrls: ['./notfoundpage.component.scss']
})
export class NotfoundpageComponent implements OnInit, OnDestroy {
  private interval;

  constructor( public router: Router ) { }

  ngOnInit() {
    this.redirectToHome();
  }

  redirectToHome() {
    this.interval = setInterval(() => {
      this.router.navigateByUrl('home');
    }, 3000 );
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
