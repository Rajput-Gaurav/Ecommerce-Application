import { RouterModule, Routes } from '@angular/router';
import { LoginUserComponent } from './login-user/login-user.component';
import { RegisterUserComponent } from './register-user/register-user.component';

const UserRouing: Routes = [
    // { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: LoginUserComponent },
    { path: 'register', component: RegisterUserComponent }
];

export const UserRoutingModule = RouterModule.forChild(UserRouing);