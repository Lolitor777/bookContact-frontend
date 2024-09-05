import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [{
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
},
{
    path: 'login',
    loadComponent: () => import('../components/auth/login/login.component')
},
{
    path: 'register',
    loadComponent: () => import('../components/auth/register/register.component')
},
{
    path: 'dashboard',
    loadComponent: () => import('../components/dashboard/dashboard.component'),
},
{
    path: '**',
    redirectTo: 'dashboard'
}
];


