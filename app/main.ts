/// <reference path="../jspm_packages/npm/@types/hammerjs@2.0.33/index.d.ts" />
import 'systemjs-hot-reloader/default-listener.js'
import "../shims.js"
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule }              from './app.module';


platformBrowserDynamic().bootstrapModule(AppModule);
