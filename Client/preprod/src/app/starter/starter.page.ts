import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GithubManager } from '../github-reactions/githubManager'
import { TwitterManager } from '../twitter-reactions/twitterManager'

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
})



export class StarterPage implements OnInit {
  public state: any;

  constructor(
    public githubManager: GithubManager,
    public twitterManager: TwitterManager,
    public root: Router,
    private route: ActivatedRoute,
    private router: Router
  ) {this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.state = this.router.getCurrentNavigation().extras.state;
      console.log(this.state.accessToken)
    }
  })}

  ngOnInit() {
  }

  allServicesAction() {
      this.router.navigate(['all-services-action']);
  }

  allServicesReaction() {
    this.router.navigate(['all-services-reaction'])
  }

  getInfo() {
    var githubAT: string;
    var githubUN: string;
    var twitterAT: string;
    var twitterUS: string;
    var serviceNameGithub: string;
    var serviceNameTweeter: string;
    githubAT = this.githubManager.token
    console.log("READY TO PUSH ACCESS TOKEN GITHUB", githubAT);
    githubUN = this.githubManager.userName
    console.log("READY TO PUSH USER NAME GITHUB", githubUN);
    twitterAT = this.twitterManager.token
    console.log("READY TO PUSH ACCESS TOKEN TWITTER", twitterAT);
    twitterUS = this.twitterManager.userNameTwitter
    console.log("READY TO PUSH USERNAME TWITTER", twitterUS);
    serviceNameGithub = this.githubManager.serviceNameGithub;
    console.log("READY TO PUSH USERNAME GITHUB", serviceNameGithub);
    serviceNameTweeter = this.twitterManager.serviceNameTweeter;
    console.log("READY TO PUSH USERNAME TWEETER", serviceNameTweeter)
  }
}
