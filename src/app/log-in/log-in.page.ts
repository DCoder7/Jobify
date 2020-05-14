import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.page.html',
  styleUrls: ['./log-in.page.scss'],
})
export class LogInPage implements OnInit {

  inputEmail: string;
  inputPassword: string;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  goToMenu() {
    if(this.inputEmail === 'davideduardo-1996@live.com.mx' && this.inputPassword === 'david') {
      this.router.navigate(['tabs']);
      this.presentToast('Bienvenido David');
    } else {
      this.presentToast('Email o contraseña no válidos.');
    }
  }

  goToSignUp() {
    this.router.navigate(['sign-up']);
  }
  
  async presentToast(message: string) {
    const toast = document.createElement('ion-toast');
    toast.color = 'dark';
    toast.message = message;
    toast.duration = 2000;
    document.body.appendChild(toast);
    return toast.present();
  }
}
