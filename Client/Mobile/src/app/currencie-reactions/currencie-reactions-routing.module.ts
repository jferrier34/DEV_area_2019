import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CurrencieReactionsPage } from './currencie-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: CurrencieReactionsPage
  },
  {
    path: 'fluctuation-dollar',
    loadChildren: () => import('./fluctuation-dollar/fluctuation-dollar.module').then( m => m.FluctuationDollarPageModule)
  },
  {
    path: 'fluctuation-dollar2',
    loadChildren: () => import('./fluctuation-dollar2/fluctuation-dollar2.module').then( m => m.FluctuationDollar2PageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CurrencieReactionsPageRoutingModule {}
