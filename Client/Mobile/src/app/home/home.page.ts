import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController} from '@ionic/angular';
import { auth } from 'firebase/app';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  mail: string = ""
  password: string = ""

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private router: Router
  ) {}

  mailLogin = () => {
    this.afAuth.auth.signInWithEmailAndPassword(this.mail, this.password)
    .then((result) => {
      this.goToStarter(result.user.uid)
    }).catch(async (error) => {
      const toast = await this.toastController.create({
        message: error.message,
        duration: 2000
      });
      toast.present();
    });
  }

  googleLogin = () => {
   this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider())
   .then((result) => {
    this.goToStarter(result.user.uid)
  }).catch(async (error) => {
    const toast = await this.toastController.create({
      message: error.message,
      duration: 2000
    });
    toast.present();
  });
  }

  facebookLogin = () => {
    this.afAuth.auth.signInWithPopup(new auth.FacebookAuthProvider())
    .then((result) => {
     this.goToStarter(result.user.uid)
   }).catch(async (error) => {
     const toast = await this.toastController.create({
       message: error.message,
       duration: 2000
     });
     toast.present();
   });
  }

  goToStarter(uid: string) {
    let navigationExtras: NavigationExtras = {
      state: {
        uid: uid
      }
    };
    this.router.navigate(['starter'], navigationExtras);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}