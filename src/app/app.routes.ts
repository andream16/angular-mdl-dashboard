import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

/** App Components **/
import { PagesComponent } from './pages/pages.component';

export const routes: Routes = [
  {
    path: 'home',
    component: PagesComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

export const Routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash : true });
