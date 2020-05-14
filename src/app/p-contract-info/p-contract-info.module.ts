import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PContractInfoPageRoutingModule } from './p-contract-info-routing.module';

import { PContractInfoPage } from './p-contract-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PContractInfoPageRoutingModule
  ],
  declarations: [PContractInfoPage]
})
export class PContractInfoPageModule {}
