import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-insta',
  templateUrl: './insta.component.html',
  styleUrls: ['./insta.component.css']
})
export class InstaComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private router: Router,
    private api: ApiService) {
  }

  accessToken: any;

  ngOnInit() {
    this.route.queryParams.subscribe(
      (param: any) => {
        let code = param['code'];
        this.api.YammerTocken(code).subscribe((res: any) => {
          console.log(res);
          if (res && res.access_token && res.access_token.token) { document.cookie = 'yammertocken=' + res.access_token.token + '; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/'; }
          if (res && res.user && res.user.network_id) { document.cookie = 'yammernetid=' + res.user.network_id + '; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/'; }
          if (res && res.user && res.user.id) { document.cookie = 'yammerid=' + res.user.id + '; expires=Thu, 18 Dec 2050 12:00:00 UTC; path=/'; }
          close();
        });
      })
  }
}
