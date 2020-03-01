import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherCity2Page } from './weather-city2.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherCity2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherCity2PageRoutingModule {}
