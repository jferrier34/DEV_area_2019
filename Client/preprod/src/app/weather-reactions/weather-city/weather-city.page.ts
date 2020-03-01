import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.page.html',
  styleUrls: ['./weather-city.page.scss'],
})
export class WeatherCityPage implements OnInit {

  constructor(
    public root: Router
  ) { }

  ngOnInit() {
  }

  backToServices() {
    this.root.navigate(['all-services-reaction'])
  }

}
