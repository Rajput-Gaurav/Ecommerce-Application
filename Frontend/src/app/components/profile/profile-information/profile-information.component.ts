import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { CommonService } from '../../../services/common.service';
import { ProfileService } from '../../../services/profile.service';

@Component({
  selector: 'app-profile-information',
  templateUrl: './profile-information.component.html',
  styleUrls: ['./profile-information.component.css']
})
export class ProfileInformationComponent implements OnInit {

  profileForm: FormGroup;
  userData: any = [];
  email: String;
  submitted = false;

  constructor(private fb: FormBuilder,
    private commonService: CommonService,
    private profileService: ProfileService) {
    this.getUserData();
  }

  ngOnInit(): void {
    this.createForm();
  }

  // create Form:
  createForm() {
    this.profileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      phonoNo: [''],
      zipcode: [''],
      address: ['']
    })
  }

  getUserData() {
    this.userData = JSON.parse(localStorage.getItem('user'));
    console.log("userData: ", this.userData);
  }

  saveProfile() {
    this.submitted = true;
    console.log("Form value:", this.profileForm.value);

    this.profileService.updateUserByEmail(this.profileForm.value)
      .subscribe(
        (async (data: any) => {
          console.log("profileUpdate: ", data);
        })
      )
  }

}
