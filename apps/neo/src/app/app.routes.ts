import { LoginComponent } from './features/login/login.component';
import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'root', pathMatch: 'full' },
  { path: '', component: LoginComponent },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features.module').then((m) => m.FeaturesModule),
  },
];
