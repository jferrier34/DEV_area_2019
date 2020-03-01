import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllServicesReactionPageRoutingModule } from './all-services-reaction-routing.module';

import { AllServicesReactionPage } from './all-services-reaction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AllServicesReactionPageRoutingModule
  ],
  declarations: [AllServicesReactionPage]
})
export class AllServicesReactionPageModule {}
