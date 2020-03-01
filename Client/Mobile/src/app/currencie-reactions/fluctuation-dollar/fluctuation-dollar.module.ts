import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FluctuationDollarPageRoutingModule } from './fluctuation-dollar-routing.module';

import { FluctuationDollarPage } from './fluctuation-dollar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FluctuationDollarPageRoutingModule
  ],
  declarations: [FluctuationDollarPage]
})
export class FluctuationDollarPageModule {}
