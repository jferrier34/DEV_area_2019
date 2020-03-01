import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublishPostTwitterPage } from './publish-post-twitter.page';

const routes: Routes = [
  {
    path: '',
    component: PublishPostTwitterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublishPostTwitterPageRoutingModule {}
