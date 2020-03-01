import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitterManager } from '../twitterManager'


@Component({
  selector: 'app-publish-post-twitter',
  templateUrl: './publish-post-twitter.page.html',
  styleUrls: ['./publish-post-twitter.page.scss'],
})
export class PublishPostTwitterPage implements OnInit {

  public tweet = "";

  constructor(
    public root: Router,
    public twitterManager: TwitterManager
  ) { 
  }

  ngOnInit() {
  }

  chooseReaction() {
    this.root.navigate(['starter'])
    console.log("twitterReactionBeforeInsert", this.twitterManager.token)
    console.log("tweetMessage:", this.tweet)
  }

  backToTwitter() {
    this.root.navigate(['twitter-reactions'])
  }

}
