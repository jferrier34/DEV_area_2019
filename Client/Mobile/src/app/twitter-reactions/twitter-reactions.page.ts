import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { TwitterManager } from '../twitter-reactions/twitterManager'
import * as firebase from 'firebase';


@Component({
  selector: 'app-twitter-reactions',
  templateUrl: './twitter-reactions.page.html',
  styleUrls: ['./twitter-reactions.page.scss'],
})
export class TwitterReactionsPage implements OnInit {

  constructor(
    public root: Router,
    public toastController: ToastController,
    private TwitterManager: TwitterManager
  ) { }

  ngOnInit() {
  }

  async publishPostTwitter() {
    if (this.TwitterManager.loggedIn)
      this.root.navigate(['publish-post-twitter'])
    else {
      const toast = await this.toastController.create({
        message: "Please login with Twitter first !",
        duration: 2000
      });
      toast.present();
    }
  }

  goToAllServices() {
    this.root.navigate(['all-services-action'])
  }

  connectToTwitter() {
    firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
    .then(async res => {
      this.TwitterManager.loggedIn = true;
      this.TwitterManager.ReactionTwitter.token = {token: (<any>res).credential.accessToken, secret: (<any>res).credential.secret};
      const toast = await this.toastController.create({
        message: "Twitter login successful",
        duration: 2000
      });
      toast.present();
    }).catch(async (error) => {
      const toast = await this.toastController.create({
        message: error.message,
        duration: 2000
      });
      toast.present();
    }
    )
  }
}
