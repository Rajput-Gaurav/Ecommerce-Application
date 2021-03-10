import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  showCart: boolean = true;
  hideCart: boolean = true;

  constructor(private commonService: CommonService) {
    console.log("Cart Component working!");
  }

  ngOnInit(): void {
    if (this.commonService.checkUser()) {
      this.showCart = true;
    } else {
      this.showCart = false;
    }
  }

}
