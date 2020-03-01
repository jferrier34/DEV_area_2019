import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherCity2PageRoutingModule } from './weather-city2-routing.module';

import { WeatherCity2Page } from './weather-city2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherCity2PageRoutingModule
  ],
  declarations: [WeatherCity2Page]
})
export class WeatherCity2PageModule {}
