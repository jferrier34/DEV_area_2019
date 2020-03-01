import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-all-services-reaction',
  templateUrl: './all-services-reaction.page.html',
  styleUrls: ['./all-services-reaction.page.scss'],
})
export class AllServicesReactionPage implements OnInit {

  public state: any;

  constructor(
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

  goToGithubWidgets() {
    this.root.navigate(['github-reactions'])
  }

  goToWeatherWidgets() {
    this.root.navigate(['weather-reactions'])
  }

  goToCurrencieswidgets() {
    this.root.navigate(['currencie-reactions'])
  }

  goToTimerWidgets() {
    this.root.navigate(['timer-reactions'])
  }

  backToHome() {
    let navigationExtras: NavigationExtras = {
      state: this.state
    };
    this.root.navigate(['starter'], navigationExtras)
  }
}
