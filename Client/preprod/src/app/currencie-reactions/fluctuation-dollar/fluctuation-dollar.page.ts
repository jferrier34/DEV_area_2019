import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fluctuation-dollar',
  templateUrl: './fluctuation-dollar.page.html',
  styleUrls: ['./fluctuation-dollar.page.scss'],
})
export class FluctuationDollarPage implements OnInit {

  constructor(
    public root: Router
  ) { }

  ngOnInit() {
  }

  backToFacebook() {
    this.root.navigate(['currencie-reactions'])
  }

}
