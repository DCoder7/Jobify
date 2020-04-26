import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpTtPageRoutingModule } from './sign-up-tt-routing.module';

import { SignUpTtPage } from './sign-up-tt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpTtPageRoutingModule
  ],
  declarations: [SignUpTtPage]
})
export class SignUpTtPageModule {}
