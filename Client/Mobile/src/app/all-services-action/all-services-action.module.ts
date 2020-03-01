import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllServicesActionPageRoutingModule } from './all-services-action-routing.module';

import { AllServicesActionPage } from './all-services-action.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllServicesActionPageRoutingModule
  ],
  declarations: [AllServicesActionPage]
})
export class AllServicesActionPageModule {}
