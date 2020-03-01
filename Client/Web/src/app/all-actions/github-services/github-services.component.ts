import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';
import { Action, Param } from 'src/app/Model/users.model';
import { AuthService } from 'src/app/core/auth.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-github-services',
  templateUrl: './github-services.component.html',
  styleUrls: ['./github-services.component.css']
})
export class GithubServicesComponent implements OnInit {
  githubUrl: string = 'https://github.com/login/oauth/authorize?client_id=6159dad038be4a86b49e&scope=user,admin:repo_hook&redirect_uri=https://devhugo.com:8081/authGithub';


  constructor(
    public router: Router, public Auth: AuthService, public api: ApiService
  ) {

    this.WaitingForToken();
  }

  public mTimer = null;
  public username = "garywongz";
  public repo = [];

  WaitingForToken() {
    var _this = this;
    this.mTimer = setInterval(function () {
      if (_this.connect == 0 && _this.Auth.getGithubTocken() != "nocookie" && _this.username != "") {
        _this.connect = 1;
        console.log("token dispo");
        clearInterval(_this.mTimer);
        _this.api.GithubRepos(_this.username, _this.Auth.getGithubTocken()).subscribe((res: any) => {
          console.log(res);
          _this.repo = res;
        });
      }
    }, 1500)
  }
  ngOnInit() {
  }

  disconnect() {
    document.cookie = 'githubtocken=; expires=Thu, 18 Dec 2010 12:00:00 UTC; path=/';
    this.connect = 0;
    this.WaitingForToken();
  }
  

  @Output() Valid = new EventEmitter<Action>();
  public connect = 0
  public repository = "";

  valid() {
    this.connect = 0;
    if (this.Auth.getGithubTocken() == "nocookie") {
      this.connect = 1;
      return;
    }
    clearInterval(this.mTimer);
    var nAction: Action = new Action();
    nAction.name = "Github - New Commit";
    nAction.Service = "GitHub";
    nAction.ServiceName = "new-github-commit-in-repo";
    nAction.token = this.Auth.getGithubTocken();
    var P1: Param = new Param();
    P1.input = "repository";
    P1.value = this.repository;
    nAction.param = new Array<Param>();
    nAction.param.push(P1);
    this.Valid.emit(nAction);
  }

}
