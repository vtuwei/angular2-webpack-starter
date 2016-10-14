import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Http, Response } from '@angular/http';
import { LoginService } from './login.service';
const styles = require('./login.component.scss');
const template = require('./login.component.pug');

@Component({
  selector: 'login',
  template: template,
  styles: [ styles ],
  providers: [ LoginService ]
})
export class Login {

  error: string;

  constructor( private router: Router, private loginService: LoginService ) {
  }

  login(event, username, password) {

    let body = JSON.stringify({ username, password });
    this.loginService.login(body)
      .subscribe(
        (response: Response) => {
          let data = response.json();
           localStorage.setItem('id_token', data.token);
           this.router.navigate(['home']);
        },
        (error: Error) => {
            this.error = 'wrong username or password';
        });
  }
}
