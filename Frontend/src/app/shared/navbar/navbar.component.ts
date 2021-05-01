import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartCount: number = 0;
  showButton: boolean = true;
  data: any = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService) {

    // show the login button if user not login:
    if (this.commonService.checkUser()) {
      this.showButton = true;
    } else {
      this.showButton = false;
    }
    // Subscribe the Subject for getting length of cart:
    this.commonService.cartSubject.subscribe(
      (async (data: any) => {
        console.log("data: ", data);
        this.cartCount = data;
      })
    );
  }

  ngOnInit(): void {
    this.getUserData();
    this.getCartCount();
  }

  // GET CART COUNT DATA:
  // GET LENGTH OF CART ITEM STORE IN LOCALSTORAGE:
  getCartCount() {
    if (localStorage.getItem('cartData') != null) {
      let cartItem = JSON.parse(localStorage.getItem('cartData'));
      this.cartCount = cartItem.length;
    }
  }

  // GET data from localStorage:
  getUserData() {
    this.data = JSON.parse(localStorage.getItem('user'));
  }

  // remove user from localStorage:
  logout() {
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }
}
