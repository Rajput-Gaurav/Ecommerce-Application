import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminRegisterComponent } from './admin-register/admin-register.component';

export const UserPages: Routes = [
    { path: '', redirectTo: '/admin-login', pathMatch: 'full' },
    { path: 'admin-login', component: AdminLoginComponent },
    { path: 'admin-register', component: AdminRegisterComponent },
    { path: 'admin-profile', component: AdminProfileComponent }
];

export const UserPagesRouting = RouterModule.forChild(UserPages);