import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '../../model';
import { StateService } from '../../starter/state.service';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.page.html',
  styleUrls: ['./weather-city.page.scss'],
})
export class WeatherCityPage implements OnInit {
  private weatherAction: Action

  constructor(
    public root: Router,
    public stateService: StateService
  ) {
    this.weatherAction = new Action
    this.weatherAction.Service = 'Weather'
    this.weatherAction.ServiceName = 'temp-under-value'
    this.weatherAction.name = 'Météo'
    this.weatherAction.token = 'notoken'
  }

  ngOnInit() {
  }

  validWeather() {
    this.stateService.chooseAction(this.weatherAction);
    this.root.navigate(['all-services-action']);
  }

  backToServices() {
    this.root.navigate(['all-services-reaction'])
  }
}
