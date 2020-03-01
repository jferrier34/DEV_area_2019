import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';
import { Action, Param } from 'src/app/Model/users.model';

@Component({
  selector: 'app-instagram-services',
  templateUrl: './instagram-services.component.html',
  styleUrls: ['./instagram-services.component.css']
})
export class InstagramServicesComponent implements OnInit {

  constructor() { }

  @Output() Valid = new EventEmitter<Action>();
  public expediteur;
  public destinataire;
  public objet;
  public message;

  valid() {
    var nAction: Action = new Action();
    nAction.name = "Mail - Envoi";
    nAction.Service = "Mail";
    nAction.ServiceName = "send-mail"
    nAction.param = new Array<Param>();
    nAction.token = "notocken";
    var P1: Param = new Param();
    P1.input = "expediteur";
    P1.value = this.expediteur;
    nAction.param.push(P1);
    var P2: Param = new Param();
    P2.input = "destinataire";
    P2.value = this.destinataire;
    nAction.param.push(P2);
    var P3: Param = new Param();
    P3.input = "objet";
    P3.value = this.objet;
    nAction.param.push(P3);
    var P4: Param = new Param();
    P4.input = "message";
    P4.value = this.message;
    nAction.param.push(P4);
    this.Valid.emit(nAction);
  }

  ngOnInit() {

  }

}
