import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitterManager } from '../twitter-reactions/twitterManager'

@Component({
  selector: 'app-twitter-reactions',
  templateUrl: './twitter-reactions.page.html',
  styleUrls: ['./twitter-reactions.page.scss'],
})
export class TwitterReactionsPage implements OnInit {

  constructor(
    public root: Router,
    private TwitterManager: TwitterManager
  ) { }

  ngOnInit() {
  }

  publishPostTwitter() {
    this.root.navigate(['publish-post-twitter'])
    console.log("twitterAccesstoken", this.TwitterManager.token);
  }

  publishPictureTwitter() {
    this.root.navigate(['publish-picture-twitter'])
  }

  goToAllServices() {
    this.root.navigate(['all-services-action'])
  }

  connectToTwitter() {
    console.log("connect you to twitter")
    this.TwitterManager.logWithTwitter2((twitterUser) => {
      console.log(twitterUser);
    })
  }



}
