import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';
import { Action, Users, ActReact, Param } from '../Model/users.model';
import { RenderNodeAction } from '@angular/core/src/view/util';
import { NullViewportScroller } from '@angular/common/src/viewport_scroller';
import { DBManageService } from '../core/dbmanage.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  items: Observable<any[]>;
  public nuser: Users;
  public actreact: ActReact;
  constructor(db: AngularFirestore, public api: ApiService, public DBManage: DBManageService, public Auth: AuthService, public router: Router) {
    console.log(this.Auth.getUid());
    if (this.Auth.getUid() == "nocookie") {
      window.location.href = '/login';
    }
  }

  ngOnInit() {
    this.nuser = new Users();
    var _this = this;
    this.nuser.firstName = "Guillaume";
    this.nuser.lastName = "Lenoir";
    this.nuser.id = this.Auth.getUid();
    this.nuser.actReact = new Array<ActReact>()
    this.actreact = new ActReact();
    this.actreact.action = null;
    this.actreact.reaction = null;
    this.DBManage.getPolicies(this.Auth.getUid()).then((snapshot) => {
      console.log(snapshot.val());
      if (snapshot.val())
      {
        _this.nuser = snapshot.val();
        if (!_this.nuser.actReact)
            this.nuser.actReact = new Array<ActReact>()
      }
    });



  }

  showuser() {
    console.log(this.nuser);

  }

  suppr(i: number, item: ActReact)
  {
    this.nuser.actReact.splice(i, 1);
    this.DBManage.deleteact(item);
    var _this = this;
    this.DBManage.createPolicy(this.nuser).then((res: any) => {
      console.log(res);
      this.DBManage.getPolicies(this.Auth.getUid()).then((snapshot) => {
        console.log(snapshot.val());
        if (snapshot.val())
        {
          _this.nuser = snapshot.val();
          if (!_this.nuser.actReact)
            this.nuser.actReact = new Array<ActReact>()
        }
      });

    });
  }
  delAct() {
    this.actreact = new ActReact();
    this.actreact.action = null;
    this.actreact.reaction = null;
  }

  addAct() {
    this.actreact.id = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    this.nuser.actReact.push(this.actreact);
    console.log(this.nuser);
    if (this.actreact.action.ServiceName == "new-github-commit-in-repo")
    {
      this.api.GithubHook(this.Auth.getGithubUser(), this.actreact.action.token, this.actreact.action.param[0].value, this.actreact.id).subscribe((res) => {
        console.log("reponse: " + res);
      });
    }
    this.DBManage.createAct(this.actreact);
    this.DBManage.createPolicy(this.nuser).then((res: any) => {
      console.log(res);
      this.delAct();

    });

  }

  validAct($event) {
    this.actreact.action = $event;
  }

  validReact($event) {
    this.actreact.reaction = $event;
  }



}
