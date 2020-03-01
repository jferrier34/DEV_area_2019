import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Action, Param } from '../model'

@Injectable()
export class CurrencieManager {
    serviceNameCurrencie: string;
    public amount = "";
    public ActionCurrencie = new Action()

    constructor(
        private http: HttpClient,
    ) {}

    ActionCurrencies = {
        serviceName: '',
        widgetName: '',
    }

    getArrayAction() {
    this.ActionCurrencies.serviceName = "Currency";
    this.ActionCurrencies.widgetName = "dollar-over-value";
    console.log("ARRAY CURRENCIES", this.ActionCurrencies);
    return (this.ActionCurrencies)
    }
}