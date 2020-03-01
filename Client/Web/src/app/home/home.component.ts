import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public pass;
  public login;s
  public remember;
  public w = 0;

  constructor(public Auth: AuthService) { }

  public onSubmit()
  {
    this.w = 0;
    this.Auth.SignIn(this.login, this.pass).then(res => {
      console.log(res.user);
      document.cookie = 'tocken=' + res.user.uid + '; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/';
      document.cookie = 'username=' + res.user.displayName + '; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/';
      window.location.href = '/dashboard';
    })
    .catch(error => {
      console.log('Something is wrong:', error.message);
    });
  }

  GoogleSign()
  {
    this.Auth.GoogleSign().then((res) => {
      console.log(res.user);
      document.cookie = 'tocken=' + res.user.uid + '; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/';
      document.cookie = 'username=' + res.user.displayName + '; expires=Thu, 18 Dec 2020 12:00:00 UTC; path=/';
      window.location.href = '/dashboard';
    }).catch( (error) => {
      console.log('Something is wrong:', error.message);
    })
  }

  ngOnInit() {
    if (this.Auth.getUid() != "nocookie")
    {
      window.location.href = '/dashboard';
    }
  }

}
