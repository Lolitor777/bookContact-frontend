import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    loadChildren: () => import('../components/dashboard/dashboard.route'),
}
];


