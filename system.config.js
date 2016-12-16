/**
* System configuration for Angular 2 samples
* Adjust as necessary for your application needs.
*/
(function(global) {
  // map tells the System loader where to look for things
  var map = {
    'app':                        'app', // 'dist',
    '@angular':                   'node_modules/@angular',
    'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
    'rxjs':                       'node_modules/rxjs',
    'hammerjs':                   'node_modules/hammerjs/hammer.js',
    "@types/hammerjs":            "node_modules/@types/hammerjs",
    '@ngrx/store':                'node_modules/@ngrx/store/bundles/store.min.umd.js',
    '@ngrx/core':                 'node_modules@ngrx/core/bundles/core.min.umd.js',
    "clean-css": "npm:clean-css",
    "core-js": "npm:core-js",
    "css": "npm:systemjs/plugin-css",
    "electron": "npm:electron",
    "font-awesome": "npm:font-awesome",
    "reflect-metadata": "npm:reflect-metadata",
    "rxjs": "npm:rxjs",
    "socket.io-client": "npm:socket.io-client",
    "systemjs-hot-reloader": "npm:systemjs-hot-reloader",
    "text": "npm:systemjs/plugin-text",
    "ts": "npm:plugin-typescript/lib",
    "typescript": "npm:typescript",
    "ts-runtime": "npm:babel-runtime",
    "tty": "npm:jspm-nodelibs-tty",
    "url": "npm:jspm-nodelibs-url",
    "zone.js": "npm:zone",
  };
  // packages tells the System loader how to load when no filename and/or no extension
  var packages = {
    "app": {
      "main": "main",
      "defaultExtension": "ts",
      "meta": {
        "*.ts": {
          "loader": "ts"
        },
        "*.css": {
          "loader": "css"
        },
        "*.html": {
          "loader": "text"
        }
      }
    },
    'rxjs':                       { defaultExtension: 'js' },
    "ts":                         { "main": "plugin.js" },
    'angular2-in-memory-web-api': { defaultExtension: 'js' },
    "typescript": {
      "main": "lib/typescript.js",
      "meta": {
        "lib/typescript.js": {
          "exports": "ts"
        }
      }
    }
  };

  var ngPackageNames = [
    'common',
    'compiler',
    'core',
    'forms',
    'http',
    'material',
    'platform-browser',
    'platform-browser-dynamic',
    'router',
    'router-deprecated',
    'upgrade',
  ];
  // Add package entries for angular packages
  ngPackageNames.forEach(function(pkgName) {
    packages['@angular/'+pkgName] = { main: 'bundles/' + pkgName + '.umd.js', defaultExtension: 'js' };
  });
  var config = {
    paths: {
      "npm:*": "node_modules/*"
    },
    transpiler: "ts",
    typescriptOptions: {
      "module": "system",
      "target": "es5",
      "typeCheck": true,
      "tsconfig": true,
      "sourceMap": true,
      "typings": {
        "@angular/core": "index.d.ts",
        "@angular/common": "index.d.ts",
        "@angular/compiler": "index.d.ts",
        "@angular/forms": "index.d.ts",
        "@angular/http": "index.d.ts",
        "@angular/material": "index.d.ts",
        "@angular/platform-browser": "index.d.ts",
        "@angular/platform-browser-dynamic": "index.d.ts",
        "@angular/router": "index.d.ts",
        "@ngrx/core": "index.d.ts",
        "@ngrx/store": "index.d.ts",
        "@types/hammerjs": "index.d.ts",
        "rxjs": "Rx.d.ts"
      }
    },
    map: map,
    packages: packages,
    meta: {
      "*.css": {
        "loader": "css"
      }
    }
  }
  System.config(config);
})(this);

