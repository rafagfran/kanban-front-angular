import type { Routes } from '@angular/router';

import { BoardComponent } from './pages/private/board/board.component';
import { LandingPageComponent } from './pages/public/landing-page/landing-page.component';
import { LoginComponent } from './pages/public/login/login.component';
import { RegisterComponent } from './pages/public/register/register.component';

export const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'board', component: BoardComponent },
  { path: 'auth/signin', component: LoginComponent },
  { path: 'auth/signup', component: RegisterComponent },
];
