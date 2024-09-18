import { Routes } from '@angular/router';
import { LayoutComponent } from './layouts/layout/layout.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { SalaryCostsComponent } from './features/dashboard/salary-costs/salary-costs.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        component: DashboardComponent,
        title: 'Dashboard!',
      },
      {
        path: 'dashboard/salary-cost',
        component: SalaryCostsComponent,
        title: 'Salary cost!',
      },
    ],
  },

  {
    path: '**',
    component: LayoutComponent,
    title: 'Not found 404!',
    children: [{ path: '', component: NotFoundComponent }],
  },
];
