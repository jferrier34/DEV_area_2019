import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, ToastController } from '@ionic/angular';
import { TwitterManager } from '../twitterManager';
import { StateService } from '../../starter/state.service';


@Component({
  selector: 'app-publish-post-twitter',
  templateUrl: './publish-post-twitter.page.html',
  styleUrls: ['./publish-post-twitter.page.scss'],
})
export class PublishPostTwitterPage implements OnInit {

  public tweet: string


  constructor(
    public root: Router,
    private toastController: ToastController,
    private stateService: StateService,
    public twitterManager: TwitterManager,
  ) {
    this.tweet = ''
  }

  ngOnInit() {
  }

  async chooseReaction() {
    if (this.tweet != '') {
      this.twitterManager.ReactionTwitter.param[0].value = this.tweet
      this.stateService.chooseReaction(this.twitterManager.ReactionTwitter);
      this.root.navigate(['starter']);
    }
    else {
      const toast = await this.toastController.create({
        message: "Please enter a content of the tweet",
        duration: 2000
      });
      toast.present();
    }
  }

  backToTwitter() {
    this.root.navigate(['twitter-reactions'])
  }

}
