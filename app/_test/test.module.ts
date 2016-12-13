import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule }         from '@angular/material'

// ========================== [ Pages ] ==========================
import { TestPage } from './test.page';
import { TestHomePage } from './test-home.page/test-home.page';
import { TestMaterialPage } from './test-material.page/test-material.page';
import { TestNgrxPage } from './test-ngrx.page/test-ngrx.page';

// ========================== [ Routing ] ==========================
import { TestRoutingModule } from './test-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TestRoutingModule,
    MaterialModule
  ],
  declarations: [
    TestPage,
    TestHomePage,
    TestMaterialPage,
    TestNgrxPage
  ],
  exports: [
    TestPage,
    TestHomePage,
    TestMaterialPage,
    TestNgrxPage
  ],
  providers: []

})
export class TestModule {

}
