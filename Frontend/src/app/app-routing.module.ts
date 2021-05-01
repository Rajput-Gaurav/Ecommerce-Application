import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpSupportComponent } from './components/help-support/help-support.component';
import { FaqComponent } from './components/faq/faq.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuard } from './provider/auth.guard';


const routes: Routes = [

  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'home', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'help-support', component: HelpSupportComponent },
  { path: 'not-user', component: ErrorPageComponent },

  { path: '', loadChildren: () => import('./components/grocery/grocery.module').then(m => m.GroceryModule) }
  // { path: '', loadChildren: () => import('./components/product/product.module').then(m => m.ProductModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
