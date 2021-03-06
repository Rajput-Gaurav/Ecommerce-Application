import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';

import { UserPagesRouting } from './user-pages.routing';


@NgModule({
  declarations: [AdminLoginComponent, AdminRegisterComponent, AdminProfileComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    UserPagesRouting
  ]
})
export class UserPagesModule { }
