import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TwitterReactionsPage } from './twitter-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: TwitterReactionsPage
  },
  {
    path: 'publish-post-twitter',
    loadChildren: () => import('./publish-post-twitter/publish-post-twitter.module').then( m => m.PublishPostTwitterPageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TwitterReactionsPageRoutingModule {}
