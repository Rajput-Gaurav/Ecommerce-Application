import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private commonService: CommonService,
    private router: Router) {
  }

  canActivate() {
    if (this.commonService.checkUser()) {
      return true
    } else {
      this.router.navigate(['/not-user']);
      return false
    }
  }
}
