import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-message',
  templateUrl: './post-message.page.html',
  styleUrls: ['./post-message.page.scss'],
})
export class PostMessagePage implements OnInit {

  constructor(
    public root: Router,
  ) { }

  ngOnInit() {
  }



  backToYammer() {
    this.root.navigate(['yammer-reactions'])
  }

}