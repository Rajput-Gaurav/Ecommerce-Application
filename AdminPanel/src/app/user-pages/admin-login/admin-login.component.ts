import { async } from '@angular/core/testing';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm: FormGroup;
  model: any = {};
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private authService: AuthService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get frm() { return this.loginForm.controls; }

  saveLoginForm() {
    this.submitted = true;
    console.log("Form value: ", this.loginForm.value);
    console.log("this.model: ", this.model);

    if (this.loginForm.invalid) {
      this.loginForm.get('email').markAsTouched();
      this.loginForm.get('password').markAsTouched();
      return;
    }
    // ADMIN LOGIN:
    this.authService.adminLogin(this.model)
      .subscribe(
        (async (data: any) => {
          console.log("login Success: ", data);
          this.router.navigate(['/dashboard']);
        })
      )
  }
}
