import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
/*
 * We're loading this component asynchronously
 * We are using some magic with es6-promise-loader that will wrap the module with a Promise
 * see https://github.com/gdi2290/es6-promise-loader for more info
 */

console.log('`About` component loaded asynchronously');

@Component({
  selector: 'module1',
  styles: [`
  `],
  template: `
    <h1>About</h1>
    <div>
      Module 1 template
      <pre>npm run start:hmr</pre>
    </div>
    <div>
      <h3>
        patrick@AngularClass.com
      </h3>
    </div>
  `
})
export class Module1 {
  localState: any;
  constructor(public route: ActivatedRoute) {

  }

  ngOnInit() {

  }
}
