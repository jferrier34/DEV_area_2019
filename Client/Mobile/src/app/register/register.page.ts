import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController} from '@ionic/angular';
import { Router } from '@angular/router';
import * as firebase from 'firebase';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  mail: string = ""
  password: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private router: Router,
  ) {}

  ngOnInit() {
  }

  backToLogin() {
    this.router.navigate(['home']);
  }

  register(value) {
    return new Promise<any>((resolve, reject) => {
      firebase.auth().createUserWithEmailAndPassword(this.mail, this.password)
      .then(res => {
        resolve(res);
      }, err => reject(err))
      this.backToLogin();
    })
  }




}
