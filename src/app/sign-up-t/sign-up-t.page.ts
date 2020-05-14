import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-t',
  templateUrl: './sign-up-t.page.html',
  styleUrls: ['./sign-up-t.page.scss'],
})
export class SignUpTPage implements OnInit {

  fechaNacimiento: string;
  numeroTarjeta: string;
  cvv: string;
  titular: string;

  constructor(private router: Router) { }

  goToSignUpTT() {
    if(this.fechaNacimiento !== undefined && this.numeroTarjeta !== undefined && this.cvv !== undefined && this.titular !== undefined) {
      this.router.navigate(['sign-up-tt']);
    } else {
      this.presentToast('Todos los campos deben ser llenados.');
    }
  }

  goToLogIn() {
    this.router.navigate(['log-in']);
  }

  async presentToast(message: string) {
    const toast = document.createElement('ion-toast');
    toast.color = 'dark';
    toast.message = message;
    toast.duration = 2000;
    document.body.appendChild(toast);
    return toast.present();
  }

  ngOnInit() {
  }

}
