import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public Auth: AuthService) { }

  public Logout()
  {
    this.Auth.SignOut();
    document.cookie = 'tocken=; expires=Thu, 18 Dec 2010 12:00:00 UTC; path=/';
    document.cookie = 'githubtocken=; expires=Thu, 18 Dec 2010 12:00:00 UTC; path=/';
    document.cookie = 'username=; expires=Thu, 18 Dec 2010 12:00:00 UTC; path=/';
    document.location.href = '/login';
  }

  ngOnInit() {
  }

}
