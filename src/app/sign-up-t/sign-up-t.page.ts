import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up-t',
  templateUrl: './sign-up-t.page.html',
  styleUrls: ['./sign-up-t.page.scss'],
})
export class SignUpTPage implements OnInit {

  constructor(private router: Router) { }

  goToSignUpTT() {
    this.router.navigate(['sign-up-tt']);
  }

  goToLogIn() {
    this.router.navigate(['log-in']);
  }

  ngOnInit() {
  }

}
