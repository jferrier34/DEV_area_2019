import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FluctuationDollar2Page } from './fluctuation-dollar2.page';

const routes: Routes = [
  {
    path: '',
    component: FluctuationDollar2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FluctuationDollar2PageRoutingModule {}
