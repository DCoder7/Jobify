import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  createJob() {
    this.presentToast();
  }

  async presentToast() {
    const toast = document.createElement('ion-toast');
    toast.color = 'dark';
    toast.message = 'El empleo ha sido creado.';
    toast.duration = 2000;
    document.body.appendChild(toast);
    return toast.present();
}

}
