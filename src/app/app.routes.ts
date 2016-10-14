import { Routes, RouterModule } from '@angular/router';
import { Login } from './login';
import { About } from './about';
import { NoContent } from './no-content';
import { AuthGuard } from './common/auth.guard';
import { DataResolver } from './app.resolver';

export const ROUTES: Routes = [
  {
    path: '', loadChildren: () => System.import('./home'), canActivate: [AuthGuard]
  },
  { path: 'login', component: Login },
  { path: 'about', component: About, canActivate: [AuthGuard] },
  {
    path: 'home', loadChildren: () => System.import('./home'), canActivate: [AuthGuard]
  },
  { path: '**', component: NoContent },
];
