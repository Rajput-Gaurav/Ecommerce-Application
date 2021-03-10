import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './routesGuard/auth.guard';


const routes: Routes = [
  { path: '', redirectTo: '/user-pages/admin-login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'productCategories', loadChildren: () => import('./modules/product-categories/product-categories.module').then(m => m.ProductCategoriesModule), canActivate: [AuthGuard] },
  { path: 'products', loadChildren: () => import('./modules/products/products.module').then(m => m.ProductsModule), canActivate: [AuthGuard] },
  { path: 'customers', loadChildren: () => import('./modules/customers/customers.module').then(m => m.CustomersModule), canActivate: [AuthGuard] },
  { path: 'customersOrders', loadChildren: () => import('./modules/customers-orders/customers-orders.module').then(m => m.CustomersOrdersModule), canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
