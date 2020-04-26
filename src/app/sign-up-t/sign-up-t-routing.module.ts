import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpTPage } from './sign-up-t.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpTPageRoutingModule {}
