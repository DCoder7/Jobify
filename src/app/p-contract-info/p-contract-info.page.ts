import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-p-contract-info',
  templateUrl: './p-contract-info.page.html',
  styleUrls: ['./p-contract-info.page.scss'],
})
export class PContractInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  cancel() {
    this.router.navigate(['tabs']);
    this.presentToast();
  }

  async presentToast() {
    const toast = document.createElement('ion-toast');
    toast.color = 'dark';
    toast.message = 'El empleo ha sido cancelado.';
    toast.duration = 2000;
    document.body.appendChild(toast);
    return toast.present();
  }

}
