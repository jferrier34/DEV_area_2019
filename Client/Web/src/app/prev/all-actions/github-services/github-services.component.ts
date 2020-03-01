import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';

@Component({
  selector: 'app-github-services',
  templateUrl: './github-services.component.html',
  styleUrls: ['./github-services.component.css']
})
export class GithubServicesComponent implements OnInit {
  githubUrl: string = 'https://github.com/login/oauth/authorize?client_id=' + gatekeeperConfig.development.client_id + '&scope=user&redirect_uri=' + gatekeeperConfig.development.redirect_uri;
  
  constructor(
    public router : Router
  ) { }

  ngOnInit() {
  }

  githubServices() {
    this.router.navigate(['github-services']);
  }
}
