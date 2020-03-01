import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TwitterManager } from '../twitterManager'


@Component({
  selector: 'app-publish-post-twitter',
  templateUrl: './publish-post-twitter.page.html',
  styleUrls: ['./publish-post-twitter.page.scss'],
})
export class PublishPostTwitterPage implements OnInit {

  constructor(
    public root: Router,
    public twitterManager: TwitterManager
  ) { 
  }

  public tweet
 
  twitterParams = {
    serviceName: '',
    widgetName: '',
    messageToTweet: this.tweet,
}

  ngOnInit() {
  }

  chooseReaction() {
    this.root.navigate(['starter'])
    console.log("MSG", this.tweet)
    this.twitterParams = this.twitterManager.doPostTwitter(this.tweet)
    console.log("EXPRESS", this.twitterParams);
  }


  backToTwitter() {
    this.root.navigate(['twitter-reactions'])
  }

}
