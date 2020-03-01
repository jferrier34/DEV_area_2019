import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FluctuationDollar2PageRoutingModule } from './fluctuation-dollar2-routing.module';

import { FluctuationDollar2Page } from './fluctuation-dollar2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FluctuationDollar2PageRoutingModule
  ],
  declarations: [FluctuationDollar2Page]
})
export class FluctuationDollar2PageModule {}
