import { Component, OnInit } from '@angular/core';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { GithubManager } from '../githubManager';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';

@Component({
  selector: 'app-do-commit-github',
  templateUrl: './do-commit-github.page.html',
  styleUrls: ['./do-commit-github.page.scss'],
})

export class DoCommitGithubPage implements OnInit {

  public repositories: any;

  qty: string;
  public at: string;
  public state: any;

  constructor(
    public root: Router,
    public navCtrl: NavController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private githubManager: GithubManager,
  ) {this.route.queryParams.subscribe(params => {
    if (this.router.getCurrentNavigation().extras.state) {
      this.state = this.router.getCurrentNavigation().extras.state;
      console.log("STATE", this.state.accessToken)
    }
  })
    
  }

  githubInfo = {
    name: '',
    loggedin: false,
    email: '',
  }

  ngOnInit() {
  }

  backToFacebook() {
    this.root.navigate(['github-reactions'])
  }

  chooseReactions() {
    this.root.navigate(['all-services-action']);
    console.log("ok", this.githubManager.token);
  }

  allRepository() {
    console.log("enter here")
    this.githubManager.getRepoOfCurrentUser((repositories) => {
      console.log("mazaltov", repositories);
      this.repositories = repositories;
    })
  }
}
