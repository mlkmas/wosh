import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './auth.guard'; 

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { ReservationsComponent } from './pages/reservations/reservations.component';

 export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'customers', component: CustomersComponent },
      { path: 'reservations', component: ReservationsComponent }
    ]
  },
  { path: '**', redirectTo: 'login' }
];

