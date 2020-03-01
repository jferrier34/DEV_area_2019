import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-timer-reactions',
  templateUrl: './timer-reactions.page.html',
  styleUrls: ['./timer-reactions.page.scss'],
})
export class TimerReactionsPage implements OnInit {

  constructor(
    public root: Router
  ) { }

  ngOnInit() {
  }

  beginTheStarter() {
    this.root.navigate(['start-timer'])
  }

  goToAllServices() {
    this.root.navigate(['all-reactions-service'])
  }

}
