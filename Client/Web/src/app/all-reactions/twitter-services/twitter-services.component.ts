import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';
import { Action, Param } from 'src/app/Model/users.model';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";


@Component({
  selector: 'app-twitter-services',
  templateUrl: './twitter-services.component.html',
  styleUrls: ['./twitter-services.component.css']
})

@Injectable({
  providedIn: 'root'
})

export class TwitterServicesComponent implements OnInit {

  constructor(
    public afAuth: AngularFireAuth
  ) { }
  @Output() Valid = new EventEmitter<Action>();

  public message;
  public loggedIn = false;
  oauthConsumerKey = "";
  oauthNonce = "";
  redirectUri = "";
  public token = null;
  public TwitterUrl = 'http://twitter.com/oauth/request_token?oauth_callback=http%3A%2F%2Fgoogle.com%2Ftwittercallback&oauth_consumer_key=my_consumer_key&oauth_nonce=ea9ec8429b68d6b77cd5600adbbb0456&oauth_signature=F1Li3tvehgcraF8DMJ7OyxO4w9Y&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1318467427&oauth_version=1.0';


  TwitterAuth() {
      return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  twitterUser = {
    name: '',
    loggedin: false,
    email: '',
}
public secret;

  AuthLogin(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
    .then((result) => {
      this.twitterUser.loggedin = true;
      this.twitterUser.name = result.user.displayName;
      this.secret = ((<any>result).credential.secret);
      this.token = (<any>result).credential.accessToken;
      console.log(this.token);
    }).catch((error) => {
      console.log('SOMETHING WAS WRONG')
    })
  }

  valid() {
    var nAction: Action = new Action();
    nAction.name = "Twitter - Tweet";
    nAction.Service = "Twitter";
    nAction.ServiceName = "twitter-post-status";
    nAction.param = new Array<Param>();
    nAction.token = {token: this.token, secret: this.secret};
    var P4: Param = new Param();
    P4.input = "message";
    P4.value = this.message;
    nAction.param.push(P4);
    this.Valid.emit(nAction);
  }
  ngOnInit() {
  }

}
