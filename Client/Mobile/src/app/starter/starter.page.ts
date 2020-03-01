import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GithubManager } from '../github-reactions/githubManager';
import { TwitterManager } from '../twitter-reactions/twitterManager';
import { DbManageService } from '../dbManage.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { StateService } from './state.service'
import { ToastController} from '@ionic/angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
})

@Injectable()
export class StarterPage implements OnInit {
  public uid: string;
  private basePath: string;
  public disableReactionButton: boolean

  constructor(
    public DBManage: DbManageService,
    public githubManager: GithubManager,
    public twitterManager: TwitterManager,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase,
    public toastController: ToastController,
    public http: HttpClient,
  ) {
    this.route.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.uid = this.router.getCurrentNavigation().extras.state.uid;
        this.basePath = '/users/' + this.uid + '/actreact';
      }
    })
    this.disableReactionButton = !this.stateService.isActionChoosed()
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.disableReactionButton = !this.stateService.isActionChoosed()
  }

  allServicesAction() {
    this.router.navigate(['all-services-action']);
  }

  allServicesReaction() {
    this.router.navigate(['all-services-reaction'])
  }

  async pushActionReaction() {
    console.log("Current ActionReaction", this.stateService.actionReaction)

    if (this.stateService.isActionReactionChoosed()) {
      this.db.list(this.basePath).push(this.stateService.actionReaction);
      let actionReactionReference = this.db.list('/actreact').push(this.stateService.actionReaction);
      if (this.stateService.actionReaction.action.ServiceName === "new-github-commit-in-repo") {
        let username = this.stateService.actionReaction.action.param[1].value;
        let user_token = this.stateService.actionReaction.action.token;
        let repo_name = this.stateService.actionReaction.action.param[0].value;
        let action_id = (await actionReactionReference).key;
        console.log(`https://devhugo.com:8080/create/GithubWebhook?owner=${username}&token=${user_token}&repo=${repo_name}&action_id=${action_id}`)
        this.http.get(`https://devhugo.com:8080/create/GithubWebhook?owner=${username}&token=${user_token}&repo=${repo_name}&action_id=${action_id}`)
      }

      this.stateService.clearActionReaction();
    }
    else {
      let toastMessage: string

      if (!this.stateService.isActionChoosed()) {
        toastMessage = "Don't forget to choose an action !"
      }
      else if (!this.stateService.isReactionChoosed()) {
        toastMessage = "You have to choose a reaction too."
      }
      const toast = await this.toastController.create({
        message: toastMessage,
        duration: 2000
      });
      toast.present();
    }
  }
}