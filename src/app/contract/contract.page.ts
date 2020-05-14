import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.page.html',
  styleUrls: ['./contract.page.scss'],
})
export class ContractPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  createContract() {
    this.router.navigate(['tabs']);
    this.presentToast();
  }

  async presentToast() {
    const toast = document.createElement('ion-toast');
    toast.color = 'dark';
    toast.message = 'Has aplicado al empleo.';
    toast.duration = 2000;
    document.body.appendChild(toast);
    return toast.present();
  }
}
