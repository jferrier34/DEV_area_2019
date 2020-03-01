import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostMessagePage } from './post-message.page';

const routes: Routes = [
  {
    path: '',
    component: PostMessagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostMessagePageRoutingModule {}
