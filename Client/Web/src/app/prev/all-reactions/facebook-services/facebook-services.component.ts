import { Component, OnInit } from '@angular/core';
import { AuthService, FacebookLoginProvider, SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-facebook-services',
  templateUrl: './facebook-services.component.html',
  styleUrls: ['./facebook-services.component.css']
})
export class FacebookServicesComponent implements OnInit {

  public user: SocialUser;
  public connected: boolean = false;

  public img: string = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/1024px-Facebook_logo_36x36.svg.png"

  signInWithFB(): void {
    this.fbAuth.signIn(FacebookLoginProvider.PROVIDER_ID);
  }
  
  signOut(): void {
    this.fbAuth.signOut();
  }

  constructor(public fbAuth: AuthService) { 

  }

  ngOnInit() {
    this.fbAuth.authState.subscribe((user) => {
      this.user = user;
      //FACEBOOK TOCKEN
      this.connected = (user != null);
      console.log(this.user);
    });
  }

}
