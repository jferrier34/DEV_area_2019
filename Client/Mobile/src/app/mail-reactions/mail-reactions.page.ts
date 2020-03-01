import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mail-reactions',
  templateUrl: './mail-reactions.page.html',
  styleUrls: ['./mail-reactions.page.scss'],
})
export class MailReactionsPage implements OnInit {

  constructor(
    public root: Router,
  ) { }

  ngOnInit() {
  }

  sendEmail() {
    this.root.navigate(['send-email'])
  }

  goToAllServices() {
    this.root.navigate(['all-services-action'])
  }

}
