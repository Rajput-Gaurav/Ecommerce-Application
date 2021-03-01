import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminLoginComponent } from './user-pages/admin-login/admin-login.component';
import { AdminRegisterComponent } from './user-pages/admin-register/admin-register.component';


const routes: Routes = [
  { path: '', redirectTo: '/user-pages/admin-login', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-pages', loadChildren: () => import('./user-pages/user-pages.module').then(m => m.UserPagesModule) },
  { path: 'productCategories', loadChildren: () => import('./modules/product-categories/product-categories.module').then(m => m.ProductCategoriesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
