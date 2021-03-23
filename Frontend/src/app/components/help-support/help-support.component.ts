import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { HelpSupportService } from '../../services/help-support.service';

@Component({
  selector: 'app-help-support',
  templateUrl: './help-support.component.html',
  styleUrls: ['./help-support.component.css']
})
export class HelpSupportComponent implements OnInit {

  supportForm: FormGroup;
  supports: any = [];
  user: any = [];
  submitted = false;

  constructor(private fb: FormBuilder,
    private router: Router,
    private commonService: CommonService,
    private supportService: HelpSupportService) {
    this.createForm();
    this.getAllSupport();
  }

  ngOnInit(): void {
    this.getData();
  }

  createForm() {
    this.supportForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      message: [''],
      userType: ['User']
    })
  }

  // GET USER DATA FROM LOCALSTORAGE:
  getData() {
    this.user = JSON.parse(localStorage.getItem('user'));
    console.log("User: ", this.user);
  }

  get frm() { return this.supportForm.controls; }

  // GET ALL SUPPORT:
  getAllSupport() {
    this.supportService.getAllSupport()
      .subscribe(
        (async (data: any) => {
          console.log("Get All Support: ", data);
          this.supports = (data && data.data) ? data.data : [];
        })
      )
  }

  // SAVE FORM:
  saveSupport() {
    this.submitted = true;
    console.log("Form value: ", this.supportForm.value);

    if (this.supportForm.invalid) {
      this.supportForm.get('firstName').markAsTouched();
      this.supportForm.get('lastName').markAsTouched();
      this.supportForm.get('email').markAsTouched();
      this.supportForm.get('message').markAsTouched();
      this.supportForm.get('userType').markAsTouched();
      return;
    }

    this.supportService.addSupport(this.supportForm.value)
      .subscribe(
        (async (data: any) => {
          console.log("data added: ", data);
          this.supportForm.get('message').reset();
          this.getAllSupport();
        })
      )
  }
}
