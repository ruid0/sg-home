import { enableProdMode } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { HTTP_PROVIDERS } from 'angular2/http';

import { MATERIAL_PROVIDERS } from 'ng2-material/all';


import { AppComponent } from './app/app';
enableProdMode();
bootstrap(AppComponent, [ROUTER_PROVIDERS, HTTP_PROVIDERS, MATERIAL_PROVIDERS]);
