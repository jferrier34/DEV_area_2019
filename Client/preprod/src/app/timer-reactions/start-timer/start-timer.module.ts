import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StartTimerPageRoutingModule } from './start-timer-routing.module';

import { StartTimerPage } from './start-timer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StartTimerPageRoutingModule
  ],
  declarations: [StartTimerPage]
})
export class StartTimerPageModule {}
