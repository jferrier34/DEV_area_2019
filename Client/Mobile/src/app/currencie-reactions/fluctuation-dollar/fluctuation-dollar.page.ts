import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Param } from '../../model';
import { CurrencieManager } from '../currencieManager'


@Component({
  selector: 'app-fluctuation-dollar',
  templateUrl: './fluctuation-dollar.page.html',
  styleUrls: ['./fluctuation-dollar.page.scss'],
})
export class FluctuationDollarPage implements OnInit {

  public amount = "";
  public nAction = new Action();

  constructor(
    public root: Router,
    public currencieManager: CurrencieManager
  ) { }

  ngOnInit() {
  }

  ActionCurrencies = {
    serviceName: '',
    widgetName: '',
  }

  valid() {
    this.root.navigate(['all-services-action'])
    console.log("TOTO")
    this.ActionCurrencies = this.currencieManager.getArrayAction()
    console.log("EXPRESS", this.ActionCurrencies);

  }

  backToFacebook() {
    this.root.navigate(['currencie-reactions'])
  }

}
