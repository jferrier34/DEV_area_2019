import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase';



@Component({
  selector: 'app-yammer-reactions',
  templateUrl: './yammer-reactions.page.html',
  styleUrls: ['./yammer-reactions.page.scss'],
})
export class YammerReactionsPage implements OnInit {

  public mTimer;
  public connect = 0;
  public var;

  constructor(
    public root: Router,
  ) { }

  ngOnInit() {
  }

  publishPostYammer() {
    this.root.navigate(['post-message']);
  }

  connectToYammer() {
      firebase.auth().signInWithPopup(new firebase.auth.OAuthProvider('www.yammer.com/epitech.eu'))
          .then(res => {
              console.log('From --Yammer--')
              console.log(res);
       }) 
       console.log("ERROR")
}
}
