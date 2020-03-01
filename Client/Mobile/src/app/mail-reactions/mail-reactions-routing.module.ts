import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MailReactionsPage } from './mail-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: MailReactionsPage
  },
  {
    path: 'send-email',
    loadChildren: () => import('./send-email/send-email.module').then( m => m.SendEmailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MailReactionsPageRoutingModule {}
