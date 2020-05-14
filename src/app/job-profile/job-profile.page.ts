import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-job-profile',
  templateUrl: './job-profile.page.html',
  styleUrls: ['./job-profile.page.scss'],
})
export class JobProfilePage implements OnInit {

  bgColors: Array<string>;

  constructor(private router: Router) { }

  ngOnInit() {
    this.bgColors = ['#CC2A49', '#F99E4C', '#F36F38', '#EF4648', '#582841'];
  }

  getRandomColor() {
    return this.bgColors[Math.floor(Math.random() * this.bgColors.length)];
  }

  goToContract(){
    this.router.navigate(['contract']);
  }
}
