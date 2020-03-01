import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartTimerPage } from './start-timer.page';

const routes: Routes = [
  {
    path: '',
    component: StartTimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StartTimerPageRoutingModule {}
