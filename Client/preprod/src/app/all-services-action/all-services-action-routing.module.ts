import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllServicesActionPage } from './all-services-action.page';

const routes: Routes = [
  {
    path: '',
    component: AllServicesActionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AllServicesActionPageRoutingModule {}
