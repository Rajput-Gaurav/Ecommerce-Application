import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { UserRoutingModule } from './users.routing';

import { RegisterService } from '../services/register.service';
import { LoginService } from '../services/login.service';


@NgModule({
  declarations: [LoginUserComponent, RegisterUserComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RegisterService, LoginService]
})
export class UsersModule { }
