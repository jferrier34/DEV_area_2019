import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoCommitGithubPageRoutingModule } from './do-commit-github-routing.module';

import { DoCommitGithubPage } from './do-commit-github.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoCommitGithubPageRoutingModule
  ],
  declarations: [DoCommitGithubPage]
})
export class DoCommitGithubPageModule {}
