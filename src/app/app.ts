import { Component } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, Router } from 'angular2/router';

import '../styles/all.scss';
@Component({
	selector: 'app',
	directives: [ROUTER_DIRECTIVES],
	template: `Welcome home<router-outlet></router-outlet>`
})


export class AppComponent {
	constructor() {
		
	}
}
