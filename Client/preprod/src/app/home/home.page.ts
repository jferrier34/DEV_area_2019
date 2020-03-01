import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ToastController} from '@ionic/angular';
import { auth } from 'firebase/app';
import { Router } from '@angular/router';

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
      console.log(result)//TOREMOVE
      this.goToStarter()
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
   //Add scope to the provider
   .then((result) => {
    console.log(result)//TOREMOVE
    this.goToStarter()
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
    //Add scope to the provider
    .then((result) => {
     console.log(result)//TOREMOVE
     this.goToStarter()
     //Move to next page
   }).catch(async (error) => {
     console.log(error.message)//TOREMOVE
     const toast = await this.toastController.create({
       message: error.message,
       duration: 2000
     });
     toast.present();
   });
  }

  goToStarter() {
    this.router.navigate(['starter']);
  }

  goToRegister() {
    this.router.navigate(['register']);
  }
}