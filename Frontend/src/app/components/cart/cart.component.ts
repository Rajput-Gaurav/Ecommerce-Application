import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { AddToCartService } from '../../services/add-to-cart.service';
import { DataTransferService } from '../../services/data-transfer.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: any = [];
  cartId: String;
  totalamount: any; //STORE SUM OF PRODUCT AND DELIVERY PRICE
  delivery = 0;  //STORE DELIVERY AMOUNT
  discount = 0;   //STORE DISCOUNT AMOUNT
  subTotal: number = 0;  //STORE THE TOTAL AMOUNT OF CART ITEMS
  orderProduct: any;  //STORE ORDER CHECKOUT DATA
  cartData: any = []; //STORE LOCALSTORAGE DATA
  valueCount;
  showCart: boolean = true;
  hideCart: boolean = true;

  constructor(private commonService: CommonService,
    private cartService: AddToCartService,
    private dataTransfer: DataTransferService) {
    this.cartSummary();
  }

  ngOnInit(): void {
    // if (this.commonService.checkUser()) {
    //   this.showCart = true;
    // } else {
    //   this.showCart = false;
    // }
    this.getData();
    this.Total();
  }

  options = {
    "key": "rzp_test_7HdkaZ1xFGPomB", // Enter the Key ID generated from the Dashboard
    "amount": '1000', // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "handler": function (response) {
      alert(response.razorpay_payment_id);
      alert(response.razorpay_order_id);
      alert(response.razorpay_signature)
    },
    "prefill": {
      "name": "Gaurav Kumar",
      "email": "gaurav.kumar@example.com",
      "contact": "9999999999"
    },
    "notes": {
      "address": "Razorpay Corporate Office"
    },
    "theme": {
      "color": "#3399cc"
    }
  };

  // Total of all product:
  Total() {
    if (localStorage.getItem('cartData')) {
      this.cartData = JSON.parse(localStorage.getItem('cartData'));
      console.log('cartData: ', this.cartData);
      // Implement reduce method:
      this.subTotal = this.cartData.reduce(function (acc, val) {
        return acc + (val.mrp * val.quantity);
      }, 0);
    }
    console.log("Total: ", this.subTotal);
  }

  // CHECK THE CART LENGTH:
  cartNumber: number = 0;
  cartNumberFunc() {
    let cartValue = JSON.parse(localStorage.getItem('cartData'));
    this.cartNumber = cartValue.length;
    this.commonService.cartSubject.next(this.cartNumber); //send cart Length through Subject:
  }

  // CHECKOUT:
  checkOut() {
    console.log("checkOut: ");
    this.orderProduct = JSON.parse(localStorage.getItem('cartData'));
    console.log('orderProduct: ', this.orderProduct);
    this.options.amount = "2000";
    // this.options.name = this.
    let pay = new this.commonService.nativeWindow.Razorpay(this.options);
    pay.open();
  }

  // GET DATA FROM LOCALSTORAGE:
  getData() {
    if (localStorage.getItem('cartData')) {
      this.cartData = JSON.parse(localStorage.getItem('cartData'));
      console.log("localStorage cartData: ", this.cartData);
    }
  }

  // INCREMENT QUANTITY:
  increment(prodId, prodQnt) {
    // set increase quantity upto 10:
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i]._id === prodId) {    //if both id match then increase Qnt:
        if (prodQnt != 10) {    //if Qnt is 10, then stop increase Qnt:
          this.cartData[i].quantity = parseInt(prodQnt) + 1;
        }
      }
    }
    localStorage.setItem('cartData', JSON.stringify(this.cartData));
    // CALL Total() method:
    this.Total();
  }

  // DECREMENT QUANTITY:
  decrement(prodId, prodQnt) {
    // set decrease quantity upto 1:
    for (let i = 0; i < this.cartData.length; i++) {
      if (this.cartData[i]._id === prodId) {
        if (prodQnt != 1) {
          this.cartData[i].quantity = parseInt(prodQnt) - 1;
        }
      }
    }
    localStorage.setItem('cartData', JSON.stringify(this.cartData));
    // CALL Total() method:
    this.Total();
  }

  // TOTAL AMOUNT FOR CART SUMMARY:
  cartSummary() {
    this.cartData = JSON.parse(localStorage.getItem('cartData'));
    console.log('subTotal: ', this.cartData);

    for (let i = 0; i < this.cartData.length; i++) {
      let total = this.cartData[i].mrp;
      console.log('mrp: ', total);
    }
  }

  // DELETE SELECTED CART:
  deleteSingleCart(cartId) {
    console.log(cartId);
    if (localStorage.getItem('cartData')) {
      this.cartData = JSON.parse(localStorage.getItem('cartData'));
      for (let i = 0; i < this.cartData.length; i++) {
        if (this.cartData[i]._id === cartId) {
          this.cartData.splice(i, 1);   //delete one cart at a time
          localStorage.setItem('cartData', JSON.stringify(this.cartData));
          this.Total();   //call Total() function to get the total amount after delete one cart:
          this.cartNumberFunc();    //call cartNumberFunc to get the total cart count after delete one cart:
        }
      }
    }
    // if (cart._id) {
    //   this.cartData = this.cartData.filter(function (obj) {
    //     return obj._id !== cart._id;
    //   });
    //   localStorage.setItem('cartData', JSON.stringify(this.cartData));
    //   console.log("cart: ", this.cartData);
    // }
  }

  // DELETE ALL CART:
  deleteAllCart() {
    localStorage.removeItem('cartData');
    this.cartData = [];   //set cartData array blank, after delete all cart
    this.subTotal = 0;    //set total amount 0, after deleting all cart product
    this.cartNumber = 0;  //set cartNumber 0, after deleing all cart
    this.commonService.cartSubject.next(this.cartNumber);   //send cartNumber as a subject to the service
  }
}
