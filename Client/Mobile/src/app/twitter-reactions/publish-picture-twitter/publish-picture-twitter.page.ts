import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-publish-picture-twitter',
  templateUrl: './publish-picture-twitter.page.html',
  styleUrls: ['./publish-picture-twitter.page.scss'],
})
export class PublishPictureTwitterPage implements OnInit {

  constructor(
    public root: Router
  ) { }

  ngOnInit() {
  }

  

  backToTwitter2() {
    this.root.navigate(['twitter-reactions'])
  }
}
