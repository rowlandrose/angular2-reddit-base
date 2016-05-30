import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { redditApp, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

export class main {
  loading_text = 'Loading!!!';
}

bootstrap(redditApp);
