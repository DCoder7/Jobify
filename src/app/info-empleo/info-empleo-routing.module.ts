import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoEmpleoPage } from './info-empleo.page';

const routes: Routes = [
  {
    path: '',
    component: InfoEmpleoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoEmpleoPageRoutingModule {}
