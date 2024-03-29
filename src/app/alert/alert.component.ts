import { AlertService } from './../service/alert.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription} from 'rxjs';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, OnDestroy {
  private subscription: Subscription;
  private interval;
  message: any;

  constructor( private alertService: AlertService ) { }

  ngOnInit() {
    this.subscription = this.alertService.getMessage().subscribe( message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
