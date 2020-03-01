import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-reactions',
  templateUrl: './all-reactions.component.html',
  styleUrls: ['./all-reactions.component.css']
})
export class AllReactionsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  backToHome() {
    this.router.navigate(['dashboard']);
  }

  facebookServices() {
    this.router.navigate(['facebook-services'])
  }

  instagramServices() {
    this.router.navigate(['instagram-services'])
  }

  twitterServices() {
    this.router.navigate(['twitter-services'])
  }

}
