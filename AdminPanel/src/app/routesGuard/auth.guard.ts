import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router,
    private authService: AuthService) {
  }

  // If user not present then return to login page:
  canActivate() {
    if (this.authService.checkUser()) {
      return true;
    } else {
      this.router.navigate(['/user-pages/admin-login']);
      return false;
    }
  }

}
