import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showButton: boolean = true;
  data: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService) {

  }

  ngOnInit(): void {
    this.getUserData();

    if (this.commonService.checkUser()) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
  }

  // GET data from localStorage:
  getUserData() {
    this.data = JSON.parse(localStorage.getItem('user'));
    // console.log("User Data: ", this.data);

  }

  // remove user from localStorage:
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
