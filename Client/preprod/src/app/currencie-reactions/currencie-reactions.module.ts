import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CurrencieReactionsPageRoutingModule } from './currencie-reactions-routing.module';

import { CurrencieReactionsPage } from './currencie-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CurrencieReactionsPageRoutingModule
  ],
  declarations: [CurrencieReactionsPage]
})
export class CurrencieReactionsPageModule {}
