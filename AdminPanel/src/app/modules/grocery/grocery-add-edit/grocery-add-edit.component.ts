import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { GroceryService } from '../../../services/grocery.service';
import { ProductCategoriesService } from '../../../services/product-categories.service';

@Component({
  selector: 'app-grocery-add-edit',
  templateUrl: './grocery-add-edit.component.html',
  styleUrls: ['./grocery-add-edit.component.scss']
})
export class GroceryAddEditComponent implements OnInit {

  groceryForm: FormGroup;
  groceryId: String;
  grocery: any = {};
  allProductCategory: any = [];
  totalamount;
  submitted = false;


  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private groceryService: GroceryService,
    private productCategoryService: ProductCategoriesService) {
    this.createForm();
    this.getProductsCategory();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.groceryId = params['Id'];
      if (!this.commonService.isUndefiendOrNull(this.groceryId)) {
        this.getGroceryById(this.groceryId);
      }
    })
  }

  // CALCULATION BASIC RATE:
  calculateBasicRate() {
    const productQuantity = this.groceryForm.get('quantity').value;
    const productPrice = this.groceryForm.get('mrp').value;
    const totalCalculation = productQuantity * productPrice;
    this.totalamount = totalCalculation.toFixed();
    console.log("totalPrice: ", this.totalamount);
  }

  // Image Select Method:
  selectImage(event: Event) {
    console.log("file selected!");
    const file = (event.target as HTMLInputElement).files[0];
    this.groceryForm.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  }

  createForm() {
    this.groceryForm = this.fb.group({
      image: [''],
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productRating: ['', Validators.required],
      mrp: ['', Validators.required],
      status: ['', Validators.required],
      quantity: ['1', Validators.required],
      totalamount: ['0', Validators.required]
    })
  }

  get frm() { return this.groceryForm.controls; }

  // GET PRODUCT CATEGORY:
  getProductsCategory() {
    this.productCategoryService.getProductCategories()
      .subscribe(
        (async (data: any) => {
          console.log("ProductCategory: ", data);
          this.allProductCategory = (data && data.data) ? data.data : [];
        })
      )
  }

  // GET GROCERY BY ID:
  getGroceryById(id) {
    this.groceryService.getGroceryById(id)
      .subscribe(response => {
        console.log("Selected Grocery: ", response);
        this.grocery = response;
        this.groceryForm.patchValue({
          image: this.grocery['data'].image,
          productName: this.grocery['data'].productName,
          productCategory: this.grocery['data'].productCategory,
          productRating: this.grocery['data'].productRating,
          mrp: this.grocery['data'].mrp,
          status: this.grocery['data'].status,
          quantity: this.grocery['data'].quantity,
          totalamount: this.grocery['data'].totalamount
        });
      });
  }

  // Save Grocery:
  saveGrocery() {
    this.submitted = true;
    console.log("GroceryFormvalue: ", this.groceryForm.value);

    if (this.groceryForm.invalid) {
      this.groceryForm.get('image').markAsTouched();
      this.groceryForm.get('productName').markAsTouched();
      this.groceryForm.get('productCategory').markAsTouched();
      this.groceryForm.get('productRating').markAsTouched();
      this.groceryForm.get('mrp').markAsTouched();
      this.groceryForm.get('status').markAsTouched();
      this.groceryForm.get('quantity').markAsTouched();
      this.groceryForm.get('totalamount').markAsTouched();
    }

    let groceryFormData = { ...this.groceryForm.value };
    groceryFormData['totalamount'] = this.totalamount;
    console.log("groceryFormData: ", groceryFormData);

    if (!this.commonService.isUndefiendOrNull(this.groceryId)) {
      this.groceryService.addEditGrocery(groceryFormData, this.groceryForm.value.image, this.groceryId)
        .subscribe(
          (async (data: any) => {
            console.log("Grocery Updated: ", data);
            this.router.navigate(['/grocery']);
          })
        );
    } else {
      this.groceryService.addEditGrocery(groceryFormData, this.groceryForm.value.image, '')
        .subscribe(
          (async (data: any) => {
            console.log("Grocery Added: ", data);
            this.router.navigate(['/grocery']);
          })
        );
    }
  }
}
