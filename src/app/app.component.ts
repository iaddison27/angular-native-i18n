import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	<h1 i18n>Hello World</h1>
	
	<!--i18n -->
		Translation by comment
	<!--/i18n-->

	<ng-container i18n>Translation by container</ng-container>
	
	<a href="http://angular.io" i18n-title title="Angular official website">Angular.io</a>
  `,
})
export class AppComponent  { }
