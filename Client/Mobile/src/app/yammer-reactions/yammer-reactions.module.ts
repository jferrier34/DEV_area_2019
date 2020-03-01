import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { YammerReactionsPageRoutingModule } from './yammer-reactions-routing.module';

import { YammerReactionsPage } from './yammer-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    YammerReactionsPageRoutingModule
  ],
  declarations: [YammerReactionsPage]
})
export class YammerReactionsPageModule {}
