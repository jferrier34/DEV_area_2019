import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WeatherReactionsPage } from './weather-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: WeatherReactionsPage
  },
  {
    path: 'weather-city',
    loadChildren: () => import('./weather-city/weather-city.module').then( m => m.WeatherCityPageModule)
  },
  {
    path: 'weather-city',
    loadChildren: () => import('./weather-city/weather-city.module').then( m => m.WeatherCityPageModule)
  },
  {
    path: 'weather-city2',
    loadChildren: () => import('./weather-city2/weather-city2.module').then( m => m.WeatherCity2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WeatherReactionsPageRoutingModule {}
