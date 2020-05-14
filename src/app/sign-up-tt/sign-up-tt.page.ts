import { Component, OnInit } from '@angular/core';

import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-tt',
  templateUrl: './sign-up-tt.page.html',
  styleUrls: ['./sign-up-tt.page.scss'],
})
export class SignUpTtPage implements OnInit {

  image: String;

  constructor(private router: Router, private camera: Camera) { }

  goToLogIn() {
    this.router.navigate(['log-in']);
  }

  goToMenu() {
      this.router.navigate(['tabs']);
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

  async presentToast() {
        const toast = document.createElement('ion-toast');
        toast.color = 'dark';
        toast.message = 'Tu cuenta ha sido creada.';
        toast.duration = 2000;
        document.body.appendChild(toast);
        return toast.present();
    }

  createUser() {
    this.presentToast();
    this.goToMenu();
  }

  ngOnInit() {
  }

}
