import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublishPostTwitterPageRoutingModule } from './publish-post-twitter-routing.module';

import { PublishPostTwitterPage } from './publish-post-twitter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublishPostTwitterPageRoutingModule
  ],
  declarations: [PublishPostTwitterPage]
})
export class PublishPostTwitterPageModule {}
