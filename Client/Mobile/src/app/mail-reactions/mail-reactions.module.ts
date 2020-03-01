import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MailReactionsPageRoutingModule } from './mail-reactions-routing.module';

import { MailReactionsPage } from './mail-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MailReactionsPageRoutingModule
  ],
  declarations: [MailReactionsPage]
})
export class MailReactionsPageModule {}
