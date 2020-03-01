import { Injectable } from '@angular/core';
import { Firebase } from '@ionic-native/firebase/ngx';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class GithubManager {
    public at: string;
    public token: string;
    public userName: string;
    isDefinied: boolean;
    repositories: Observable<any>;
    qty: string;
    serviceNameGithub: string;



    constructor(
        private http: HttpClient,

    ) {
        console.log("github");
    }

    githubUser = {
        name: '',
        loggedin: false,
        email: ''
    }
    
    logWithGithub(callback) {
        firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider())
        .then(res => {
            this.githubUser.loggedin = true;
            this.githubUser.name = res.user.displayName;
            this.githubUser.email = res.user.email;
            this.token = (<any>res).credential.accessToken;
            this.userName = this.githubUser.name;
            this.serviceNameGithub = "Github";
            console.log("ACCESS USERNAME GITHUB:", this.userName);
            console.log("ACCESS TOKEN GITHUB:", this.token);
            callback(this.githubUser)
        })
    }

    getRepoOfCurrentUser(callback) {
        console.log("enter here")
        this.token;
        console.log("LETSGO", this.token)
        console.log('TEST');
        var test = this.token
        this.repositories = this.http.get('https://devhugo.com:8080/get/GithubRepos?owner=madeinusa34&token='+test);
        this.repositories
        .subscribe(data => {
          this.repositories = data;
          console.log('my data: ', data); 
          console.log('repositoriy content:', this.repositories)
          callback(this.repositories)
        })
      }

    setAccessToken(accessT) {
        this.token = accessT;
    }

    githubContentAccessToken() {
    }

    getAccess() {
        
    }

    



}