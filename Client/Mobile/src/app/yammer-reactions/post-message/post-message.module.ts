import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostMessagePageRoutingModule } from './post-message-routing.module';

import { PostMessagePage } from './post-message.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostMessagePageRoutingModule
  ],
  declarations: [PostMessagePage]
})
export class PostMessagePageModule {}
