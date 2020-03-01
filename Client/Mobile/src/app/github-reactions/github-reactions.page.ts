import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { GithubManager } from './githubManager';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-github-reactions',
  templateUrl: './github-reactions.page.html',
  styleUrls: ['./github-reactions.page.scss'],
})
export class GithubReactionsPage implements OnInit {

  public at: string;
  public nameOfService: string;

  constructor(
    public root: Router,
    private githubManager: GithubManager,
    public toastController: ToastController,
  ) {
  }

  ngOnInit() {
  }

  async doCommitGithub() {
    if (this.githubManager.loggedIn)
      this.root.navigate(['do-commit-github'])
    else {
      const toast = await this.toastController.create({
        message: "Please login with GitHub first !",
        duration: 2000
      });
      toast.present();
    }
  }

  goToAllServices() {
    this.root.navigate(['all-services-reaction'])
  }

  loginGithub() {
    this.githubManager.logWithGithub()
    .then(async res => {
      this.githubManager.loggedIn = true;
      this.githubManager.githubAction.token = (<any>res).credential.accessToken;
      this.githubManager.githubAction.param[1].value = (<any>res).additionalUserInfo.username;
      const toast = await this.toastController.create({
        message: "GitHub login successful",
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

 getAccessToken() {
    return this.at;
  }



}
