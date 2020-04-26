import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SignUpTPageRoutingModule } from './sign-up-t-routing.module';

import { SignUpTPage } from './sign-up-t.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SignUpTPageRoutingModule
  ],
  declarations: [SignUpTPage]
})
export class SignUpTPageModule {}
