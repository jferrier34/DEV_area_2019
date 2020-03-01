import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { StateService } from '../../starter/state.service';
import { ToastController } from '@ionic/angular';
import { Reaction } from '../../model';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.page.html',
  styleUrls: ['./send-email.page.scss'],
})
export class SendEmailPage implements OnInit {
  public expediteur: string;
  public destinataire: string;
  public objet: string;
  public message: string;

  mailReaction: Reaction

  constructor(
    public router: Router,
    public stateService: StateService,
    public toastController: ToastController
  ) {
    this.expediteur = ''
    this.destinataire = ''
    this.objet = ''
    this.message = ''

    this.mailReaction = new Reaction
    this.mailReaction.Service = "Mail"
    this.mailReaction.ServiceName = "send-mail"
    this.mailReaction.name = "Mail - Envoi"
    this.mailReaction.token = "notoken"
    this.mailReaction.param = Array()
  }

  ngOnInit() {
  }

  async valid() {
    let toasterError = ""
    if (this.expediteur == '')
      toasterError = "sender"
    else if (this.destinataire == '')
      toasterError = "receiver"
    else if (this.objet == '')
      toasterError = "object"
    else if (this.message == '')
      toasterError = "message"

    if (toasterError == '') {
      this.mailReaction.param.push({ input: "expediteur", value: this.expediteur })
      this.mailReaction.param.push({ input: "destinataire", value: this.destinataire })
      this.mailReaction.param.push({ input: "objet", value: this.objet })
      this.mailReaction.param.push({ input: "message", value: this.message })
      this.stateService.chooseReaction(this.mailReaction)
      this.router.navigate(['starter'])
    }
    else {
      const toast = await this.toastController.create({
        message: 'No ' + toasterError + ' set.',
        duration: 2000
      });
      toast.present();
    }
  }

  backToFacebook() {
    this.router.navigate(['mail-reactions'])
  }

}
