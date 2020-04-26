import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'log-in',
    loadChildren: () => import('./log-in/log-in.module').then( m => m.LogInPageModule)
  },
  {
    path: 'sign-up',
    loadChildren: () => import('./sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-up-t',
    loadChildren: () => import('./sign-up-t/sign-up-t.module').then( m => m.SignUpTPageModule)
  },
  {
    path: 'sign-up-tt',
    loadChildren: () => import('./sign-up-tt/sign-up-tt.module').then( m => m.SignUpTtPageModule)
  },
  {
    path: 'info-empleo',
    loadChildren: () => import('./info-empleo/info-empleo.module').then( m => m.InfoEmpleoPageModule)
  },
  {
    path: 'job-profile',
    loadChildren: () => import('./job-profile/job-profile.module').then( m => m.JobProfilePageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
