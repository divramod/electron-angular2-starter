import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }        from '@angular/router';

// ========================== [ Pages ] ==========================
import { TestPage } from './test.page';
import { TestHomePage } from './test-home.page/test-home.page';
import { TestMaterialPage } from './test-material.page/test-material.page';
import { TestNgrxPage } from './test-ngrx.page/test-ngrx.page';

const routes: Routes = [
  { path: '',
    component: TestPage,
    children: [
      { path: 'material', component: TestMaterialPage },
      { path: 'ngrx', component: TestNgrxPage },
      { path: '', component: TestHomePage },
    ]
  },
];

export const TestRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
