import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { GroceryService } from '../../../services/grocery.service';
import { AddToCartService } from '../../../services/add-to-cart.service';

@Component({
  selector: 'app-grocery-details',
  templateUrl: './grocery-details.component.html',
  styleUrls: ['./grocery-details.component.css']
})
export class GroceryDetailsComponent implements OnInit {

  cartData: any;
  localStorageContent = localStorage.getItem('cartData');
  groceryForm: FormGroup;
  submitted = false;
  selectedGrocery: any = [];
  groceryId: String;
  Grocery: any = [];

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private groceryService: GroceryService,
    private cartService: AddToCartService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.groceryId = this.route.snapshot.params['Id'];
    console.log("Selected groceryId: ", this.groceryId);
    if (!this.commonService.isUndefiendOrNull(this.groceryId)) {
      this.getGrocery(this.groceryId);
    }
  }

  // CREATE FORM:
  createForm() {
    this.groceryForm = this.fb.group({
      productImage: [''],
      productName: [''],
      productMrp: [''],
      productQuantity: [''],
      totalamount: ['']
    })
  }

  // get form Controls:
  get frm() { return this.groceryForm.controls; }

  // get Product By Id:
  getGrocery(groceryId) {
    this.groceryService.getProductById(this.groceryId)
      .subscribe(
        (async (data: any) => {
          console.log("selected Grocery Item: ", data);
          this.selectedGrocery = (data && data.data) ? data.data : [];
        })
      );
  }

  // ADD TO CART METHOD:
  addToCart() {
    let product_flag = false;
    // debugger;
    if (this.localStorageContent === null) {
      this.cartData = [];
    } else {
      let prodId = this.selectedGrocery._id;
      console.log('prodId: ', prodId);
      this.cartData = JSON.parse(localStorage.getItem("cartData"));

      for (let i = 0; i < this.cartData.length; i++) {

        if (prodId === this.cartData[i]._id) {
          product_flag = true;
          this.cartData[i].quantity = parseInt(this.cartData[i].quantity) + 1;
          break;
        }
      }
    }
    if (!product_flag)
      this.cartData.push(this.selectedGrocery);
    // SET DATA INTO LOCALSTORAGE:
    localStorage.setItem('cartData', JSON.stringify(this.cartData));
    console.log("product add to cart successfully!", this.cartData);

    // CALL cartNumberFunc:
    this.cartNumberFunc();
  } //---------------END ADD TO CART FUNCTION:

  // CHECK THE CART LENGTH:
  cartNumber: number = 0;
  cartNumberFunc() {
    let cartValue = JSON.parse(localStorage.getItem('cartData'));
    this.cartNumber = cartValue.length;
    this.commonService.cartSubject.next(this.cartNumber); //send cart Length through Subject:
  }

  // SAVE FORM:
  saveGrocery() {
    this.submitted = true;
    console.log("Add to Cart Formdata: ", this.groceryForm.value);

    if (this.groceryForm.invalid) {
      this.groceryForm.get('productImage').markAsTouched();
      this.groceryForm.get('productName').markAsTouched();
      this.groceryForm.get('productMrp').markAsTouched();
      this.groceryForm.get('productQuantity').markAsTouched();
      this.groceryForm.get('totalamount').markAsTouched();
    }
  }
}
