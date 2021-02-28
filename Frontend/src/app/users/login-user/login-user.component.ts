import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login-user',
  templateUrl: './login-user.component.html',
  styleUrls: ['./login-user.component.css']
})
export class LoginUserComponent implements OnInit {

  loginForm: FormGroup;
  model: any = {};
  submitted = false;

  constructor(private router: Router,
    private fb: FormBuilder,
    private loginService: LoginService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  get frm() { return this.loginForm.controls; }

  createForm() {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  saveLoginForm() {
    this.submitted = true;
    console.log("Form value: ", this.loginForm.value);
    console.log("this.model: ", this.model);

    if (this.loginForm.invalid) {
      this.loginForm.get('email').markAsTouched();
      this.loginForm.get('password').markAsTouched();
      return;
    }

    this.loginService.userlogin(this.model)
      .subscribe(
        (async (data: any) => {
          console.log("login successfully!!! ", data);
          this.router.navigate(['/home']);
        })
      )
  }

}
