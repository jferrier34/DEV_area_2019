import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';
import { Action, Param } from 'src/app/Model/users.model';
import { AuthService } from 'src/app/core/auth.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-facebook-services',
  templateUrl: './facebook-services.component.html',
  styleUrls: ['./facebook-services.component.css']
})
export class FacebookServicesComponent implements OnInit {

  public YamUrl = "https://www.yammer.com/oauth2/authorize?client_id=3a1Va7IwnmaHxQCO2JNWKw&response_type=code&redirect_uri=https://devhugo.com:8081/authYammer";
  public connected: boolean = false;
  public select;
  public mTimer;
  public connect = 0;
  public message;

  public username = "garywongz";
  public groupe = [];

  WaitingForToken() {
    var _this = this;
    this.mTimer = setInterval(function () {
      if (_this.connect == 0 && _this.Auth.getYammerTocken() != "nocookie") {
        _this.connect = 1;
        console.log("token dispo");
        clearInterval(_this.mTimer);
        _this.api.YammerGroup(_this.Auth.getYammerId(), _this.Auth.getYammerTocken()).subscribe((res: any) => {
          console.log(res);
          _this.groupe.push({ id: _this.Auth.getYammerNetId(), nom: "All Company" })
          res.forEach((element: string) => {
            _this.groupe.push({ id: element.split(':')[0], nom: element.split(':')[1] })
          });

        });
      }
    }, 1500)
  }

  disconnect() {
    document.cookie = 'yammertocken=; expires=Thu, 18 Dec 2010 12:00:00 UTC; path=/';
    this.connect = 0;
    this.WaitingForToken();
  }

  constructor(public Auth: AuthService, public api: ApiService) {
    this.WaitingForToken();
  }

  ngOnInit() {

  }

  @Output() Valid = new EventEmitter<Action>();

  valid() {
    clearInterval(this.mTimer);
    var nAction: Action = new Action();
    nAction.name = "Yammer - Post";
    nAction.Service = "Yammer";
    if (this.Auth.getYammerNetId() == this.select)
      nAction.ServiceName = "yammer-post-status";
    else
      nAction.ServiceName = "yammer-post-group-status";
    nAction.token = this.Auth.getYammerTocken();
    nAction.param = new Array<Param>();
    var p1 = new Param();
    var p2 = new Param();
    p1.input = "groupe";
    p1.value = this.select;
    p2.input = "message";
    p2.value = this.message;
    nAction.param.push(p1);
    nAction.param.push(p2);
    this.Valid.emit(nAction);
  }

}
