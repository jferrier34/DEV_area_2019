import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Observable } from 'rxjs';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  public userData: Observable<firebase.User>;

  constructor(private angularFireAuth: AngularFireAuth) {
    this.userData = angularFireAuth.authState;
  }

  public getCookie(cname) {
    const name = cname + '=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    // tslint:disable-next-line:prefer-for-of
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return 'nocookie';
  }

  /* Uid */

  public getUid()
  {
    return this.getCookie("tocken");
  }
  
  public getGithubTocken()
  {
    return this.getCookie("githubtocken");
  }

  public getGithubUser()
  {
    return this.getCookie("githubuser");
  }

  public getYammerTocken()
  {
    return this.getCookie("yammertocken");
  }

  public getTwitterToken()
  {
    return this.getCookie("twittertocken");
  }

  public getTwitterSecret()
  {
    return this.getCookie("twittersecret");
  }

  public getYammerNetId()
  {
    return this.getCookie("yammernetid");
  }

  public getYammerId()
  {
    return this.getCookie("yammerid");
  }

  public getUsername()
  {
    return this.getCookie("username");
  }

  /*Google Auth*/

  GoogleSign()
  {
    return this.angularFireAuth.auth.signInWithPopup(new auth.GoogleAuthProvider);
  }

  /* Sign up */
  SignUp(email: string, password: string) {
    this.angularFireAuth
      .auth
      .createUserWithEmailAndPassword(email, password);
  }

  /* Sign in */
  SignIn(email: string, password: string) {
    return this.angularFireAuth
      .auth
      .signInWithEmailAndPassword(email, password);
  }

  /* Sign out */
  SignOut() {
    this.angularFireAuth
      .auth
      .signOut();
  }

}
