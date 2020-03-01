import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TwitterManager {

    public token: string;
    public userNameTwitter: string;
    serviceNameTweeter: string;


    constructor(
        private http: HttpClient,
    ) 
    {
        console.log("twitter");
    }

    twitterUser = {
        name: '',
        loggedin: false,
        email: ''
    }

    logWithTwitter2(callback) {
        firebase.auth().signInWithPopup(new firebase.auth.TwitterAuthProvider())
            .then(res => {
                console.log('From --Twitter--')
                console.log(res);
                this.twitterUser.loggedin = true;
                this.twitterUser.name = res.user.displayName;
                this.twitterUser.email = res.user.email;
                this.userNameTwitter = this.twitterUser.name;
                this.serviceNameTweeter = "Twitter";
                this.token = (<any>res).credential.accessToken;
                console.log("ACCESS TOKEN TWITTER:", this.token);
                callback(this.twitterUser)
         })
    }

}