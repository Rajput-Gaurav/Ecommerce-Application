import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ProductsService } from '../../../services/products.service';
import { ProductCategoriesService } from '../../../services/product-categories.service';

@Component({
  selector: 'app-products-add-edit',
  templateUrl: './products-add-edit.component.html',
  styleUrls: ['./products-add-edit.component.scss']
})
export class ProductsAddEditComponent implements OnInit {

  productsForm: FormGroup;
  productsId: String;
  products: any = {};
  allProductCategory: any = [];
  totalamount;
  submitted = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private productsService: ProductsService,
    private productCategoryService: ProductCategoriesService) {
    this.createForm();
    this.getProductsCategory();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productsId = params['Id'];
      if (!this.commonService.isUndefiendOrNull(this.productsId)) {
        this.getProductsById(this.productsId);
      }
    })
  }

  // CALCULATION BASIC RATE:
  calculateBasicRate() {
    const productQuantity = this.productsForm.get('quantity').value;
    const productPrice = this.productsForm.get('mrp').value;
    const totalCalculation = productQuantity * productPrice;
    this.totalamount = totalCalculation.toFixed();
    console.log("totalPrice: ", this.totalamount);
  }

  // Image Select Method:
  selectImage(event: Event) {
    console.log("file selected!");
    const file = (event.target as HTMLInputElement).files[0];
    this.productsForm.patchValue({ image: file });
    const allowedMimeTypes = ["image/png", "image/jpeg", "image/jpg"];
  }

  createForm() {
    this.productsForm = this.fb.group({
      image: [''],
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      productRating: ['', Validators.required],
      mrp: ['', Validators.required],
      status: ['', Validators.required],
      quantity: ['1', Validators.required],
      totalamount: ['0', Validators.required]
    });
  }

  get frm() { return this.productsForm.controls; }

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

  // GET PRODUCTS BY ID:
  getProductsById(id) {
    this.productsService.getProductsById(id)
      .subscribe(response => {
        console.log("GET PRODUCTS BY ID: ", response);
        this.products = response;
        this.productsForm.patchValue({
          image: this.products['data'].image,
          productName: this.products['data'].productName,
          productCategory: this.products['data'].productCategory,
          productRating: this.products['data'].productRating,
          mrp: this.products['data'].mrp,
          status: this.products['data'].status,
          quantity: this.products['data'].quantity,
          totalamount: this.products['data'].totalamount
        });
      });
  }

  // SAVE FORM:
  saveProducts() {
    this.submitted = true;
    console.log("Products Form value: ", this.productsForm.value);

    if (this.productsForm.invalid) {
      this.productsForm.get('image').markAsTouched();
      this.productsForm.get('productName').markAsTouched();
      this.productsForm.get('productCategory').markAsTouched();
      this.productsForm.get('productRating').markAsTouched();
      this.productsForm.get('mrp').markAsTouched();
      this.productsForm.get('status').markAsTouched();
      this.productsForm.get('quantity').markAsTouched();
      this.productsForm.get('totalamount').markAsTouched();
    }

    let productFormData = { ...this.productsForm.value };
    productFormData['totalamount'] = this.totalamount;
    console.log("Form data: ", productFormData);

    if (!this.commonService.isUndefiendOrNull(this.productsId)) {
      this.productsService.addEditProducts(productFormData, this.productsForm.value.image, this.productsId)
        .subscribe(
          (async (data: any) => {
            console.log("Products updated successfully!!! ", data);
            this.router.navigate(['/products']);
          })
        );
    } else {
      this.productsService.addEditProducts(productFormData, this.productsForm.value.image, '')
        .subscribe(
          (async (data: any) => {
            console.log("Products added successfully!!! ", data);
            this.router.navigate(['/products']);
          })
        )
    }
  }

}
