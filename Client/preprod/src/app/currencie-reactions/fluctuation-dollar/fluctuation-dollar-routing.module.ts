import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluctuationDollarPage } from './fluctuation-dollar.page';

const routes: Routes = [
  {
    path: '',
    component: FluctuationDollarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluctuationDollarPageRoutingModule {}
