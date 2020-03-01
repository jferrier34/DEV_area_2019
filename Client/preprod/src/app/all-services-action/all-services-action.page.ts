import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { GithubManager } from '../github-reactions/githubManager';


@Component({
  selector: 'app-all-services-action',
  templateUrl: './all-services-action.page.html',
  styleUrls: ['./all-services-action.page.scss'],
})
export class AllServicesActionPage implements OnInit {

  public state: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public root: Router,
    public navCtrl: NavController,
    private githubManager: GithubManager,
  ) {this.route.queryParams.subscribe(params => {
    console.log("EXEMPLE")
    if (this.router.getCurrentNavigation().extras.state) {
      console.log("enter in if");
      this.state = this.router.getCurrentNavigation().extras.state;
      console.log("accesstoken of the first service", this.githubManager.token)
    }
  })
  }


  ngOnInit() {
    this.state;
  }

  goToFacebookWidgets() {
    let navigationExtras: NavigationExtras = {
      state: this.state
    };
    console.log("okkkkk");
    this.router.navigate(['facebook-reactions'], navigationExtras);
    console.log("ko");
    console.log("print", this.githubManager.token)
  }

  goToTwitterWidgets() {
    this.router.navigate(['twitter-reactions'])
  }

  goToGithubWidgets() {
    this.router.navigate(['github-reactions'])
  }

  goToWeatherWidgets() {
    this.router.navigate(['weather-reactions'])
  }

  goToMailwidgets() {
    this.router.navigate(['mail-reactions'])
  }

  backToHome() {
    this.router.navigate(['starter'])
  }

}
