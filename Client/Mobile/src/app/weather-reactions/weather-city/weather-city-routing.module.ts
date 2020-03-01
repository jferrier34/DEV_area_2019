import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherCityPage } from './weather-city.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherCityPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherCityPageRoutingModule {}
