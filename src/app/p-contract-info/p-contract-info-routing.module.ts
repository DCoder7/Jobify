import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PContractInfoPage } from './p-contract-info.page';

const routes: Routes = [
  {
    path: '',
    component: PContractInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PContractInfoPageRoutingModule {}
