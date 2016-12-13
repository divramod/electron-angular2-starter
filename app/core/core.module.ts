// From Style guide item 4-11
// https://angular.io/docs/ts/latest/guide/style-guide.html#04-11
// which is newer than
// https://angular.io/docs/ts/latest/guide/ngmodule.html#!#core-module

// ========================== [ 3rd-party ] ==========================
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core'
import { CommonModule } from '@angular/common'

// ========================== [ ngrx ] ==========================
import { StoreModule } from '@ngrx/store'

// ========================== [ PAGES ] ==========================
import { HomePage } from './home/home.page'
import { AboutPage } from './about/about.page'
import { NotFoundPage } from './not-found/not-found.page'

// ========================== [ MODULES ] ==========================
import { CoreRoutingModule } from './core-routing.module'

import { reducer } from './store/index';


const store = StoreModule.provideStore(reducer)

@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,
    store
  ],
  declarations: [
    HomePage,
    NotFoundPage,
    AboutPage
  ],
  exports: [
    HomePage,
    NotFoundPage,
    AboutPage
  ],
  providers: []

})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only')
    }
  }
}

