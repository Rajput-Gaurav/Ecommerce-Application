import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.scss']
})
export class AdminProfileComponent implements OnInit {

  data: any;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getAdminData();
  }

  // GET ADMIN DATA:
  getAdminData() {
    this.data = JSON.parse(localStorage.getItem("user"));
  }
}
