import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { YammerReactionsPage } from './yammer-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: YammerReactionsPage
  },
  {
    path: 'post-message',
    loadChildren: () => import('./post-message/post-message.module').then( m => m.PostMessagePageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class YammerReactionsPageRoutingModule {}
