import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.page.html',
  styleUrls: ['./send-email.page.scss'],
})
export class SendEmailPage implements OnInit {

  constructor(
    public root: Router
  ) { }

  ngOnInit() {
  }

  backToFacebook() {
    this.root.navigate(['mail-reactions'])
  }

}
