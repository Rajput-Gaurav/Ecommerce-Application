import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.scss']
})
export class AdminRegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private authService: AuthService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  createForm() {
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      userType: ['Admin']
    })
  }

  get frm() { return this.registerForm.controls; }

  saveRegisterForm() {
    this.submitted = true;
    console.log("Form value: ", this.registerForm.value);

    if (this.registerForm.invalid) {
      this.registerForm.get('firstName').markAsTouched();
      this.registerForm.get('lastName').markAsTouched();
      this.registerForm.get('email').markAsTouched();
      this.registerForm.get('password').markAsTouched();
      return;
    }

    this.authService.addEditAdminUser(this.registerForm.value, '')
      .subscribe(
        (async (data: any) => {
          console.log("adminUserAdded: ", data);
          this.router.navigate(['//user-pages/admin-login']);
        })
      );
  }

}
