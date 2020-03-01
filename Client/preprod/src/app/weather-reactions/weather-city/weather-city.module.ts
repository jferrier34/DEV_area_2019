import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherCityPageRoutingModule } from './weather-city-routing.module';

import { WeatherCityPage } from './weather-city.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherCityPageRoutingModule
  ],
  declarations: [WeatherCityPage]
})
export class WeatherCityPageModule {}
