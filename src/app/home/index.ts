import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Home } from './home.component';

import { Module1 } from './module1';

console.log('`Home` bundle loaded asynchronously');
// async components must be named routes for WebpackAsyncRoute
export const routes = [
  { path: '', component: Home, pathMatch: 'full' },
  { path: 'module1', component: Module1, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    // Components / Directives/ Pipes
    Home,
    Module1
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ]
})
export default class HomeModule {
  static routes = routes;
}
