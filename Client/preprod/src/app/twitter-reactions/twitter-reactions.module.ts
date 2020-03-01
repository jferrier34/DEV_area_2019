import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TwitterReactionsPageRoutingModule } from './twitter-reactions-routing.module';

import { TwitterReactionsPage } from './twitter-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TwitterReactionsPageRoutingModule
  ],
  declarations: [TwitterReactionsPage]
})
export class TwitterReactionsPageModule {}
