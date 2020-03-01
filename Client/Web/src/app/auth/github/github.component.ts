import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { gatekeeperConfig } from "../../gatekeeper.config";
import { HttpClient, HttpHandler, HttpClientModule, HttpParams, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ApiService) {
  }

  accessToken: any;

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: any) => {
        console.log(param);
        // GITHUB TOCKEN
        let code = param['code'];
        this.api.GithubToken(code).subscribe((res: any) => {
          console.log(res);
          if (res && res.access_token) { document.cookie = 'githubtocken=' + res.access_token + '; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/'; }
          this.api.GithubUser(res.access_token).subscribe ((resa:any) => {
            if (resa && resa.login) { document.cookie = 'githubuser=' + resa.login + '; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/'; }
            close();
          })
          
        });
      })
  }

}
