import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-currencie-reactions',
  templateUrl: './currencie-reactions.page.html',
  styleUrls: ['./currencie-reactions.page.scss'],
})
export class CurrencieReactionsPage implements OnInit {

  constructor(
    public root: Router,
  ) { }

  ngOnInit() {
  }

  seeFluctuation() {
    this.root.navigate(['fluctuation-dollar'])
  }

  goToAllServices() {
    this.root.navigate(['all-services-reaction'])
  }

}
