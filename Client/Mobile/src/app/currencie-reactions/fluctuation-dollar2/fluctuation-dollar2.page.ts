import { Component, OnInit, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Action, Param } from '../../model';
import { HttpClient } from '@angular/common/http';
import { ToastController } from '@ionic/angular';
import { StateService } from '../../starter/state.service';

@Component({
  selector: 'app-fluctuation-dollar2',
  templateUrl: './fluctuation-dollar2.page.html',
  styleUrls: ['./fluctuation-dollar2.page.scss'],
})
export class FluctuationDollar2Page implements OnInit {
  public first_currency: string
  public second_currency: string
  public exchange_rate: string

  public currencies: string[];
  public currentExchangeRate: string;

  public currencyAction: Action;

  constructor(
    public root: Router,
    public http: HttpClient,
    public toastController: ToastController,
    public stateService: StateService
  ) {
    this.currencyAction = new Action
    this.currencyAction.Service = "Currency"
    this.currencyAction.ServiceName = "dollar-over-value"
    this.currencyAction.name = "Currency - The exchange rate between two currencies goes over a value"
    this.currencyAction.param = Array()
    this.currencyAction.param.push({input: "first_currency", value: ""})
    this.currencyAction.param.push({input: "second_currency", value: ""})
    this.currencyAction.param.push({input: "exchange_rate", value: ""})

    this.currencies = new Array()
    this.http.get('https://devhugo.com:8080/get/Currencies').subscribe((res: any) => {
      for (let key in res.results) {
        this.currencies.push(res.results[key])
      }
    })
    this.first_currency = ''
    this.second_currency = ''
    this.exchange_rate = ''
  }
  ngOnInit() {}

  onValueChange() {
    if (this.first_currency !== '' && this.second_currency !== '') {
      this.http.get(`https://devhugo.com:8080/get/CurrenciesActual?cur1=${this.first_currency}&cur2=${this.second_currency}`)
        .subscribe((res: any) => {
          for (let key in res) {
            this.currentExchangeRate = res[key];
          }
        })
    }
  }

  async valid() {
    let toasterError = ""
    if (this.first_currency == '')
      toasterError = "first currency"
    else if (this.second_currency == '')
      toasterError = "second currency"
    else if (this.exchange_rate == '')
      toasterError = "exchange rate"

    if (toasterError == '') {
      this.currencyAction.param[0].value = this.first_currency
      this.currencyAction.param[1].value = this.second_currency
      this.currencyAction.param[2].value = this.exchange_rate
      this.stateService.chooseAction(this.currencyAction);
      this.root.navigate(['all-services-action'])
    }
    else {
      const toast = await this.toastController.create({
        message: 'No ' + toasterError + ' set.',
        duration: 2000
      });
      toast.present();
    }
  }

  backToFacebook() {
    this.root.navigate(['currencie-reactions'])
  }
}
