import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { AuthService } from '../core/auth.service';
import { auth } from 'firebase';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  public mail;
  public pass;
  public name;
  public passc;
  public w = 0;
  public h = 0;
  constructor(public Auth: AuthService) { }

  public onSubmit()
  {
    this.w = 0;
    this.h = 0;
    if (this.pass === '' || this.passc === '' || this.mail === '' || this.name === '' || (this.pass !== this.passc)) {
        this.w = 1;
      }
    else {
       this.Auth.SignUp(this.mail, this.pass);
        window.location.href = '/';
      }
  }

  ngOnInit() {
    if (this.Auth.getUid() != "nocookie")
    {
      window.location.href = '/dashboard';
    }
    
  }

}
