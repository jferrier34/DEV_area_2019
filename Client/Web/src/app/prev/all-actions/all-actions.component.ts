import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-actions',
  templateUrl: './all-actions.component.html',
  styleUrls: ['./all-actions.component.css']
})
export class AllActionsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['dashboard']);
  }

  githubServices() {
    this.router.navigate(['github-services']);
  }

  weatherServices() {
    this.router.navigate(['weather-services']);
  }

  timerServices() {
    this.router.navigate(['timer-services']);
  }

}
