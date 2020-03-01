import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Action, Param} from '../model';


@Injectable()
export class GithubManager {
    private repositories: Observable<any>;
    public githubAction: Action;
    public loggedIn: boolean;

    constructor(
        private http: HttpClient,
    ) {
        this.loggedIn = false
        this.githubAction = new Action
        this.githubAction.name = "Github - New Commit"
        this.githubAction.Service = "GitHub"
        this.githubAction.ServiceName = "new-github-commit-in-repo"
        this.githubAction.param = new Array()
        this.githubAction.param.push({input: "repository", value: ""})
    }

    logWithGithub() {
        return firebase.auth().signInWithPopup(new firebase.auth.GithubAuthProvider());
    }

    refreshRepositories(callback) {
        this.repositories = this.http.get('https://devhugo.com:8080/get/GithubRepos?owner=madeinusa34&token=' + this.githubAction.token);
        this.repositories
        .subscribe(data => {
          this.repositories = data;
          callback(this.repositories)
        })
      }
}