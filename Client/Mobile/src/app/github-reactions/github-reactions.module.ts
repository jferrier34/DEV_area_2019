import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GithubReactionsPageRoutingModule } from './github-reactions-routing.module';

import { GithubReactionsPage } from './github-reactions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GithubReactionsPageRoutingModule
  ],
  declarations: [GithubReactionsPage]
})
export class GithubReactionsPageModule {}
