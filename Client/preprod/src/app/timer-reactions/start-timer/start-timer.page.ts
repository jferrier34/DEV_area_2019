import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-timer',
  templateUrl: './start-timer.page.html',
  styleUrls: ['./start-timer.page.scss'],
})
export class StartTimerPage implements OnInit {

  constructor(
    public root: Router
  ) { }

  ngOnInit() {
  }

  backToServices() {
    this.root.navigate(['timer-reactions'])
  }

}
