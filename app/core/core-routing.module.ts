import { ModuleWithProviders } from '@angular/core';
import { Routes,
         RouterModule }        from '@angular/router';

import { HomePage } from './home/home.page';
import { AboutPage } from './about/about.page';
import { NotFoundPage } from './not-found/not-found.page';

const routes: Routes = [
      //{ path: '', redirectTo: 'home', pathMatch: 'full'},
      { path: 'home', component: HomePage },
      { path: 'about', component: AboutPage },
      { path: 'not-found', component: NotFoundPage }
];

export const CoreRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
