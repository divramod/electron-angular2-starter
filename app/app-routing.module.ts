//https://github.com/dancancro/great-big-angular2-example/blob/master/src/app/app.routing.ts
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '_test/ngrx', pathMatch: 'full' },
  { path: '_ducks', loadChildren: 'app/_ducks/ducks.module#DucksModule' },
  { path: '_test', loadChildren: 'app/_test/test.module#TestModule' },
  { path: '**', redirectTo: '/not-found', pathMatch: 'full' }
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
