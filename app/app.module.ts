// ========================== [ 3rd party ] ==========================
import { BrowserModule }          from '@angular/platform-browser'
import { NgModule }               from '@angular/core'
import { RouterModule }           from '@angular/router'
import { MaterialModule }         from '@angular/material'
import 'hammerjs';


// ========================== [ app components ] ==========================
import { AppComponent }           from './app.component'

// ========================== [ app modules general ] ==========================
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { SharedModule, SharedComponents } from './shared/shared.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    MaterialModule.forRoot()
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: []
})
export class AppModule {}
