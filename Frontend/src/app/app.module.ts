import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// Angular Material:
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SliderComponent } from './shared/slider/slider.component';

import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';

import { AuthGuard } from './provider/auth.guard';
import { HeaderComponent } from './shared/header/header.component';
import { HomeProductComponent } from './components/home/home-product/home-product.component';
import { HomeProductListComponent } from './components/home/home-product/home-product-list/home-product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CartComponent,
    ErrorPageComponent,
    SliderComponent,
    HeaderComponent,
    HomeProductComponent,
    HomeProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule
  ],
  providers: [LoginService, RegisterService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
