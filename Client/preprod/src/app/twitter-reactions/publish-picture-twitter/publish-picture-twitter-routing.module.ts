import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishPictureTwitterPage } from './publish-picture-twitter.page';

const routes: Routes = [
  {
    path: '',
    component: PublishPictureTwitterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishPictureTwitterPageRoutingModule {}
