import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PublishPictureTwitterPageRoutingModule } from './publish-picture-twitter-routing.module';

import { PublishPictureTwitterPage } from './publish-picture-twitter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PublishPictureTwitterPageRoutingModule
  ],
  declarations: [PublishPictureTwitterPage]
})
export class PublishPictureTwitterPageModule {}
