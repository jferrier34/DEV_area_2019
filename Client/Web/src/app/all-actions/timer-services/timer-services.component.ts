import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';
import { gatekeeperConfig } from 'src/app/gatekeeper.config';
import { Action, Param } from 'src/app/Model/users.model';
import { AuthService } from 'src/app/core/auth.service';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-timer-services',
  templateUrl: './timer-services.component.html',
  styleUrls: ['./timer-services.component.css']
})
export class TimerServicesComponent implements OnInit {

  constructor(public api: ApiService) { }

  public text;
  public name;
  public currDispo: any[];
  public actual = 0.00;
  public curr1: any = null;
  public curr2: any = null;

  @Input() type;

  onValueChange() {
    if (this.curr1 && this.curr2) {
      var currtot = `${this.curr1}_${this.curr2}`;
      this.api.getCurrencyActual(this.curr1, this.curr2).subscribe((res: any) => {
        for (let key in res) {
          let value = res[key];
          this.actual = value;
          this.value = value;
        }
      })
    }
  }

  public value;

  ngOnInit() {
    this.currDispo = new Array();
    this.api.getCurrency().subscribe((res: any) => {
      for (let key in res.results) {
        let value = res.results[key];
        this.currDispo.push(value);
      }
    });
    if (this.type == 1) {
      this.text = "Currency - Current value drops below specified value";
      this.name = "dollar-under-value"
    }
    else {
      this.text = "Currency - The current value above the specified value";
      this.name = "dollar-over-value"
    }

  }

  @Output() Valid = new EventEmitter<Action>();
  public prix = "";

  valid() {

    var nAction: Action = new Action();
    nAction.name = this.text;
    nAction.Service = "Currency";
    nAction.ServiceName = this.name
    nAction.param = new Array<Param>();
    nAction.token = "notocken";
    var P1: Param = new Param();
    P1.input = "Premiere Currency";
    P1.value = this.curr1;
    nAction.param.push(P1);
    var P2: Param = new Param();
    P2.input = "Premiere Currency";
    P2.value = this.curr2;
    nAction.param.push(P2);
    var P3: Param = new Param();
    P3.input = "Value";
    P3.value = this.value;
    nAction.param.push(P3);
    this.Valid.emit(nAction);
  }

}
