import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { tokenNotExpired } from 'angular2-jwt';


@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {

    if (tokenNotExpired()) {
      return true;
    }

    this.router.navigate(['/login']);

    //TODO - invoke login dialog here if the page is not being reloaded

    return false;
  }
}
