import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllServicesReactionPage } from './all-services-reaction.page';

const routes: Routes = [
  {
    path: '',
    component: AllServicesReactionPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllServicesReactionPageRoutingModule {}
