import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'dashboard',
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'details',
    loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)
  },  
  {
    path: 'details/:code/:sol',
    loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)
  },
  {
    path: 'details/:code/:sol/:camera',
    loadChildren: () => import('./modules/details/details.module').then(m => m.DetailsModule)
  },  
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
