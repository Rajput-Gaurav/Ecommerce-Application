import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  registerForm: FormGroup;
  userId: String;
  Users: any = {};
  submitted = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private registerService: RegisterService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.userId = params['Id'];
      if (!this.commonService.isUndefiendOrNull(this.userId)) {
        this.getUserById(this.userId);
      }
    })
  }

  // Select Image:
  selectImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.registerForm.patchValue({ image: file });
  }

  createForm() {
    this.registerForm = this.fb.group({
      image: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // Get Form Controls:
  get frm() { return this.registerForm.controls; }

  // Get User By Id:
  getUserById(id) {
    this.registerService.getUsersById(id)
      .subscribe(
        response => {
          console.log("Get Users: ", response);
          this.Users = response;
          this.registerForm.patchValue({
            image: this.registerForm['data'].image,
            firstName: this.registerForm['data'].firstName,
            lastName: this.registerForm['data'].lastName,
            email: this.registerForm['data'].email,
            mobileNo: this.registerForm['data'].mobileNo,
            address: this.registerForm['data'].address,
            zipCode: this.registerForm['data'].zipCode,
            password: this.registerForm['data'].password
          });
        }
      );
  }

  saveRegisterForm() {
    this.submitted = true;
    console.log("Form value: ", this.registerForm.value);

    if (this.registerForm.invalid) {
      this.registerForm.get('firstName').markAsTouched();
      this.registerForm.get('lasName').markAsTouched();
      this.registerForm.get('email').markAsTouched();
      this.registerForm.get('image').markAsTouched();
      this.registerForm.get('mobileNo').markAsTouched();
      this.registerForm.get('address').markAsTouched();
      this.registerForm.get('zipCode').markAsTouched();
      this.registerForm.get('password').markAsTouched();
      return;
    }


    this.registerService.addEditUsers(this.registerForm.value, this.registerForm.value.image, '')
      .subscribe(
        (async (data: any) => {
          console.log("data added: ", data);
          this.router.navigate(['/login']);
        })
      );
  }
}
