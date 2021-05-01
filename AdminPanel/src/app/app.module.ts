import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ChartsModule, ThemeService } from 'ng2-charts';

// AUTH GUARD
import { AuthGuard } from './routesGuard/auth.guard';

// COMPONENTS
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FaqAddEditComponent } from './modules/faq/faq-add-edit/faq-add-edit.component';
import { FaqViewComponent } from './modules/faq/faq-view/faq-view.component';
import { ContentAnimateDirective } from './shared/directives/content-animate.directive';
// PIPE
import { CharacterLimitPipe } from './pipes/character-limit.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    SpinnerComponent,
    ContentAnimateDirective,
    FaqAddEditComponent,
    FaqViewComponent,
    CharacterLimitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    HttpClientModule
  ],
  providers: [ThemeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
