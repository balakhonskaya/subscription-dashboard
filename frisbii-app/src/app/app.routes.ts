import { Routes } from '@angular/router';
import { CustomerList } from './features/customers/pages/customer-list/customer-list';
import { CustomerDetails } from './features/customers/pages/customer-details/customer-details';
import { customerResolver } from './features/customers/pages/customer-details/customer.resolver';

export const routes: Routes = [
  { path: '', redirectTo: 'customers', pathMatch: 'full' },
  { path: 'customers', component: CustomerList },
  { path: 'customer/:handle', component: CustomerDetails, resolve: { customer: customerResolver } },
];
