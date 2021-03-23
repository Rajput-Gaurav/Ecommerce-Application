import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Angular Material:
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

// GOOGLE MAP:
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppRoutingModule } from './app-routing.module';

// AUTHGUARD:
import { AuthGuard } from './provider/auth.guard';

// SERVICES:
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';

// COMPONENTS:
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { SliderComponent } from './shared/slider/slider.component';

import { HeaderComponent } from './shared/header/header.component';
import { HomeProductComponent } from './components/home/home-product/home-product.component';
import { HomeProductListComponent } from './components/home/home-product/home-product-list/home-product-list.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { HelpSupportComponent } from './components/help-support/help-support.component';

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
    HomeProductListComponent,
    AboutUsComponent,
    HelpSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule,
    MatDividerModule,
    AgmCoreModule.forRoot({
      apiKey: ''
    }),
    AgmSnazzyInfoWindowModule
  ],
  providers: [LoginService, RegisterService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
