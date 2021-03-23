import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { SupportService } from '../../../services/support.service';

@Component({
  selector: 'app-support-add-edit',
  templateUrl: './support-add-edit.component.html',
  styleUrls: ['./support-add-edit.component.scss']
})
export class SupportAddEditComponent implements OnInit {

  supportForm: FormGroup;
  supportId: String;
  supports: any = [];
  adminData: any = [];
  submitted = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private supportService: SupportService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.getAdminData();
    this.getAllSupport();
  }

  createForm() {
    this.supportForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      message: [''],
      userType: ['Admin'],
    })
  }

  get frm() { return this.supportForm.controls; }

  // GET ADMIN DATA FROM LOCALSTORAGE:
  getAdminData() {
    this.adminData = this.commonService.getData();
    console.log("Admin data: ", this.adminData);
  }

  // GET All SUPPORT DATA:
  getAllSupport() {
    this.supportService.getAllSupport()
      .subscribe(
        (async (data: any) => {
          console.log("All Support: ", data);
          this.supports = (data && data.data) ? data.data : [];
        })
      );
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
      );
  }
}
