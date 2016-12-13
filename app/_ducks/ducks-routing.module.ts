import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

import { DucksPage } from './ducks.page';
import { DucksHomePage } from './ducks-home.page/ducks-home.page';
import { DucksCreatePage } from './ducks-create.page/ducks-create.page';
import { DucksListPage } from './ducks-list.page/ducks-list.page';

const routes: Routes = [
  { path: '',
    component: DucksPage,
    children: [
      { path: 'create', component: DucksCreatePage },
      { path: 'list', component: DucksListPage },
      { path: '', component: DucksHomePage },
    ]
  },
];

export const DucksRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
