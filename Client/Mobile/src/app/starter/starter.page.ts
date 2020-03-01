import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { GithubManager } from '../github-reactions/githubManager';
import { TwitterManager } from '../twitter-reactions/twitterManager';
import { CurrencieManager } from '../currencie-reactions/currencieManager';
import { DbManageService } from '../dbManage.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { StateService } from './state.service'
import { ToastController} from '@ionic/angular';

@Component({
  selector: 'app-starter',
  templateUrl: './starter.page.html',
  styleUrls: ['./starter.page.scss'],
})

@Injectable()
export class StarterPage implements OnInit {
  public uid: string;
  private basePath: string;
  private disableReactionButton: boolean

  constructor(
    public DBManage: DbManageService,
    public githubManager: GithubManager,
    public twitterManager: TwitterManager,
    public currencieManager: CurrencieManager,
    private stateService: StateService,
    private route: ActivatedRoute,
    private router: Router,
    private db: AngularFireDatabase,
    public toastController: ToastController,
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
      this.db.list('/actreact').push(this.stateService.actionReaction);
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