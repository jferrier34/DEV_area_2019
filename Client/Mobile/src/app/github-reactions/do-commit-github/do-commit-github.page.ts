import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NavController, ToastController } from '@ionic/angular';
import { GithubManager } from '../githubManager';
import { StateService } from '../../starter/state.service'
import { Param } from '../../model';

@Component({
  selector: 'app-do-commit-github',
  templateUrl: './do-commit-github.page.html',
  styleUrls: ['./do-commit-github.page.scss'],
})

export class DoCommitGithubPage implements OnInit {
  public repositories: any;
  public choosedRepository: string;

  constructor(
    public root: Router,
    public navCtrl: NavController,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    private githubManager: GithubManager,
    private stateService: StateService,
    private toastController: ToastController,
  ) { }

  ngOnInit() {
    this.allRepository()
  }

  backToFacebook() {
    this.root.navigate(['github-reactions'])
  }

  async chooseReactions() {
    if (this.githubManager.githubAction.param[0].value !== "") {
      this.stateService.chooseAction(this.githubManager.githubAction);
      this.root.navigate(['all-services-action']);
    }
    else {
      const toast = await this.toastController.create({
        message: "Please choose a repository",
        duration: 2000
      });
      toast.present();
    }
  }

  chooseRepository() {
    this.githubManager.githubAction.param[0].value = this.choosedRepository
  }

  allRepository() {
    this.githubManager.refreshRepositories((repositories) => {
      this.repositories = repositories;
    })
  }
}
