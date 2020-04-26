import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoEmpleoPageRoutingModule } from './info-empleo-routing.module';

import { InfoEmpleoPage } from './info-empleo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoEmpleoPageRoutingModule
  ],
  declarations: [InfoEmpleoPage]
})
export class InfoEmpleoPageModule {}
