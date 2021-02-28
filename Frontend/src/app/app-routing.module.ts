import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthGuard } from './provider/auth.guard';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'home', component: HomeComponent },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard] },
  { path: 'not-user', component: ErrorPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
