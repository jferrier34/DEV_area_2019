import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase';
import { auth } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { URL } from 'url';
import { GithubManager } from './githubManager';

@Component({
  selector: 'app-github-reactions',
  templateUrl: './github-reactions.page.html',
  styleUrls: ['./github-reactions.page.scss'],
})
export class GithubReactionsPage implements OnInit {

  public at: string;
  public nameOfService: string;
  isDefinied: boolean;

  constructor(
    public root: Router,
    private auth: AngularFireAuth,
    private githubManager: GithubManager
  ) { 
    this.isDefinied = false;
    
  }

  ngOnInit() {
  }

  doCommitGithub() {
    this.root.navigate(['do-commit-github'])
  }

  goToAllServices() {
    let navigationExtras: NavigationExtras = {
      state: {
        accessToken: this.at,
        serviceName: this.nameOfService,
      }
    };
    this.root.navigate(['all-services-reaction'], navigationExtras)
  }

  loginGithub() {
    this.githubManager.logWithGithub((githubUser) => {
      console.log(githubUser);
    })
  }

 getAccessToken() {
    return this.at;
  }



}
