import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';
import { Action, Param } from 'src/app/Model/users.model';
import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import * as firebase from 'firebase';
import { AngularFireAuth } from "@angular/fire/auth";
import { AuthService } from 'src/app/core/auth.service';


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
    public afAuth: AngularFireAuth, public auth: AuthService
  ) { }
  @Output() Valid = new EventEmitter<Action>();

  public message;
  public loggedIn = false;
  oauthConsumerKey = "";
  oauthNonce = "";
  redirectUri = "";
  public token;
  public TwitterUrl = 'http://twitter.com/oauth/request_token?oauth_callback=http%3A%2F%2Fgoogle.com%2Ftwittercallback&oauth_consumer_key=my_consumer_key&oauth_nonce=ea9ec8429b68d6b77cd5600adbbb0456&oauth_signature=F1Li3tvehgcraF8DMJ7OyxO4w9Y&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1318467427&oauth_version=1.0';


  TwitterAuth() {
    return this.AuthLogin(new auth.TwitterAuthProvider());
  }

  public secret;

  AuthLogin(provider) {
    this.loggedIn = true;
    return this.afAuth.auth.signInWithPopup(provider)
      .then((result) => {
        this.secret = ((<any>result).credential.secret);
        this.token = (<any>result).credential.accessToken;
        document.cookie = 'twittertocken=' + this.token + '; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/';
        document.cookie = 'twittersecret=' + this.secret + '; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/';
        this.loggedIn = true;
        console.log(this.token);
      }).catch((error) => {
        console.log('SOMETHING WAS WRONG')
      })
  }

  TwitterUnAuth() {
    document.cookie = 'twittertocken=; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/';
    document.cookie = 'twittersecret=; expires=Thu, 18 Dec 2000 12:00:00 UTC; path=/';
    this.loggedIn = false;
  }

  valid() {
    if (this.loggedIn == false || this.message == "")
      return;
    this.token = this.auth.getTwitterToken();
    this.secret = this.auth.getTwitterSecret();
    var nAction: Action = new Action();
    nAction.name = "Twitter - Tweet";
    nAction.Service = "Twitter";
    nAction.ServiceName = "twitter-post-status";
    nAction.param = new Array<Param>();
    nAction.token = { token: this.token, secret: this.secret };
    var P4: Param = new Param();
    P4.input = "message";
    P4.value = this.message;
    nAction.param.push(P4);
    this.Valid.emit(nAction);
  }


  ngOnInit() {
    if (this.auth.getTwitterToken() != "nocookie") {
      this.token = this.auth.getTwitterToken();
      this.secret = this.auth.getTwitterSecret();
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }

  }

}
