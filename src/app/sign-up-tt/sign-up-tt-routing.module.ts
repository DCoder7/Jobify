import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpTtPage } from './sign-up-tt.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpTtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SignUpTtPageRoutingModule {}
