import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// ========================== [ Pages ] ==========================
import { DucksHomePage } from './ducks-home.page/ducks-home.page';
import { DucksCreatePage } from './ducks-create.page/ducks-create.page';
import { DucksListPage } from './ducks-list.page/ducks-list.page';
import { DucksPage } from './ducks.page';

// ========================== [ Routing ] ==========================
import { DucksRoutingModule } from './ducks-routing.module';


@NgModule({
  imports: [
    CommonModule,
    DucksRoutingModule
  ],
  declarations: [
    DucksPage,
    DucksCreatePage,
    DucksHomePage,
    DucksListPage
  ],
  exports: [
    DucksPage,
    DucksCreatePage,
    DucksHomePage,
    DucksListPage
  ],
  providers: []

})
export class DucksModule {

}

