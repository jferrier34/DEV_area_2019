import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubReactionsPage } from './github-reactions.page';

const routes: Routes = [
  {
    path: '',
    component: GithubReactionsPage
  },
  {
    path: 'do-commit-github',
    loadChildren: () => import('./do-commit-github/do-commit-github.module').then( m => m.DoCommitGithubPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GithubReactionsPageRoutingModule {}
