import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  image: string;
  nombre: string;
  apellido: string;

  constructor(private camera: Camera, private router: Router) { }

  goToLogIn() {
    this.router.navigate(['log-in']);
  }

  goToSignUpT() {
    if(this.nombre !== undefined && this.apellido !== undefined) {
      this.router.navigate(['sign-up-t']);
    } else {
      this.presentToast('Todos los campos deben ser llenados.');
    } 
  }

  async presentToast(message: string) {
    const toast = document.createElement('ion-toast');
    toast.color = 'dark';
    toast.message = message;
    toast.duration = 2000;
    document.body.appendChild(toast);
    return toast.present();
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true
    };
    this.camera.getPicture(options).then((imageData) => {
      this.image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      console.log(err);
    });
  }

  

  ngOnInit() {
  }

}
