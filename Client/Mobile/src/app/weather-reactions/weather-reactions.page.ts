import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-reactions',
  templateUrl: './weather-reactions.page.html',
  styleUrls: ['./weather-reactions.page.scss'],
})
export class WeatherReactionsPage implements OnInit {

  constructor(
    public root: Router
  ) { }

  ngOnInit() {
  }

  whichCity() {
    this.root.navigate(['weather-city'])
  }

  whichCity2() {
    this.root.navigate(['weather-city2'])
  }

  goToAllServices() {
    this.root.navigate(['all-services-reaction'])
  }

}
