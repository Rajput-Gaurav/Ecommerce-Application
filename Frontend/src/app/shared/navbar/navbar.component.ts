import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  showLoginButton: boolean = true;
  showbox: boolean = false;
  data: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.data = JSON.parse(localStorage.getItem('user'));
    console.log("User Data: ", this.data);

  }

  // remove user from localStorage:
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
