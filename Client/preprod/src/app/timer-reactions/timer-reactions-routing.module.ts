import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TimerReactionsPage } from './timer-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: TimerReactionsPage
  },
  {
    path: 'start-timer',
    loadChildren: () => import('./start-timer/start-timer.module').then( m => m.StartTimerPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TimerReactionsPageRoutingModule {}
