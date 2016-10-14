import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { AppState } from '../app.service';
import { Title } from './title';
import { XLarge } from './x-large';
import { TestService } from './test.service';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title,
    TestService
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.scss' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class Home {
  // Set our default values
  localState = { value: '' };
  userData: any = null;
  // TypeScript public modifiers
  constructor(public appState: AppState, public title: Title, private testService: TestService) {

  }

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);

    this.testService.test()
      .subscribe(
        (response: Response) => {
          let data = response.json();
          this.userData = JSON.stringify(data, undefined, 2);
           //alert(data);
        },
        (error: Error) => {
            alert('got an error')
        });
  }

  submitState(value: string) {
    console.log('submitState', value);
    this.appState.set('value', value);
    this.localState.value = '';
  }

  logout() {
    localStorage.removeItem('id_token');
    location.reload();
  }
}
