import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TimerReactionsPageRoutingModule } from './timer-reactions-routing.module';

import { TimerReactionsPage } from './timer-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TimerReactionsPageRoutingModule
  ],
  declarations: [TimerReactionsPage]
})
export class TimerReactionsPageModule {}
