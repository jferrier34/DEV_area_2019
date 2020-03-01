import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from '../../model';
import { StateService } from '../../starter/state.service';

@Component({
  selector: 'app-weather-city2',
  templateUrl: './weather-city2.page.html',
  styleUrls: ['./weather-city2.page.scss'],
})
export class WeatherCity2Page implements OnInit {
  private weatherAction: Action

  constructor(
    public root: Router,
    public stateService: StateService
  ) {
    this.weatherAction = new Action
    this.weatherAction.Service = 'Weather'
    this.weatherAction.ServiceName = 'rainy-day'
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
