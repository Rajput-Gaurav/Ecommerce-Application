import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { CustomersService } from '../../../services/customers.service';

@Component({
  selector: 'app-customers-add-edit',
  templateUrl: './customers-add-edit.component.html',
  styleUrls: ['./customers-add-edit.component.scss']
})
export class CustomersAddEditComponent implements OnInit {

  customersForm: FormGroup;
  customerId: String;
  customerdata: any = {};
  submitted = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private customerService: CustomersService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.customerId = params['Id'];
      if (!this.commonService.isUndefiendOrNull(this.customerId)) {
        this.getUserById(this.customerId);
      }
    })
  }

  // Select Image:
  selectImage(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.customersForm.patchValue({ image: file });
  }

  // CREATE FORM:
  createForm() {
    this.customersForm = this.fb.group({
      image: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      mobileNo: ['', Validators.required],
      address: ['', Validators.required],
      zipCode: ['', Validators.required],
      password: [123456]
    })
  }

  // Get Form Controls:
  get frm() { return this.customersForm.controls; }

  // Get User By Id:
  getUserById(id) {
    this.customerService.getUserById(id)
      .subscribe(response => {
        console.log("Get Users By Id: ", response);
        this.customerdata = response;
        this.customersForm.patchValue({
          image: this.customerdata['data'].image,
          firstName: this.customerdata['data'].firstName,
          lastName: this.customerdata['data'].lastName,
          email: this.customerdata['data'].email,
          mobileNo: this.customerdata['data'].mobileNo,
          address: this.customerdata['data'].address,
          zipCode: this.customerdata['data'].zipCode,
          password: this.customerdata['data'].password
        });
      });
  }

  // Save CustomerForm:
  saveCustomers() {
    this.submitted = true;
    console.log("CustomerForm value: ", this.customersForm.value);

    if (this.customersForm.invalid) {
      this.customersForm.get('image').markAsTouched();
      this.customersForm.get('firstName').markAsTouched();
      this.customersForm.get('lastName').markAsTouched();
      this.customersForm.get('email').markAsTouched();
      this.customersForm.get('mobileNo').markAsTouched();
      this.customersForm.get('address').markAsTouched();
      this.customersForm.get('zipCode').markAsTouched();
      this.customersForm.get('password').markAsTouched();
      return;
    }

    if (!this.commonService.isUndefiendOrNull(this.customerId)) {
      this.customerService.addEditUser(this.customersForm.value, this.customersForm.value.image, this.customerId)
        .subscribe(
          (async (data: any) => {
            console.log("data updated: ", data);
            this.router.navigate(['/customers']);
          })
        );
    } else {
      this.customerService.addEditUser(this.customersForm.value, this.customersForm.value.image, '')
        .subscribe(
          (async (data: any) => {
            console.log("data added: ", data);
            this.router.navigate(['/customers']);
          })
        );
    }
  }
}
