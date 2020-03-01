import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { HttpClient } from '@angular/common/http';
import { Param, Reaction } from '../model';

@Injectable()
export class TwitterManager {

    public token: string;
    public userNameTwitter: string;
    public messageToPostTwitter: string;
    public serviceNameTweeter: string;
    public ReactionTwitter = new Reaction()



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

    twitterParams = {
        serviceName: '',
        widgetName: '',
        messageToTweet: '',
        accessTokenTwitter: '',
        secret: ''
    }

    setTweet(mess) {
        this.messageToPostTwitter = mess;
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
                this.twitterParams.secret = (<any>res).credential.secret;
                this.serviceNameTweeter = "Twitter";
                this.token = (<any>res).credential.accessToken;
                console.log("ACCESS TOKEN TWITTER:", this.token);
                callback(this.twitterUser)
         })
         //TODO Catch error
    }

    doPostTwitter(mess) {
        this.twitterParams.serviceName = "Twitter";
        this.twitterParams.widgetName = "twitter-post-status";
        this.twitterParams.messageToTweet = mess;
        this.twitterParams.accessTokenTwitter = this.token;
        console.log("ACCESSTOKEN");
        var P1: Param = new Param();
        P1.input = "tweet";
        P1.value = mess;
        this.ReactionTwitter.param = new Array<Param>();
        this.ReactionTwitter.param.push(P1);
        console.log("ARRAY TWITTER", this.twitterParams);
        return (this.twitterParams)
    }

}