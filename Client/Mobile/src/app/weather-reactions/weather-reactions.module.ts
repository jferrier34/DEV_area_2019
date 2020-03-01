import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WeatherReactionsPageRoutingModule } from './weather-reactions-routing.module';

import { WeatherReactionsPage } from './weather-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WeatherReactionsPageRoutingModule
  ],
  declarations: [WeatherReactionsPage]
})
export class WeatherReactionsPageModule {}
