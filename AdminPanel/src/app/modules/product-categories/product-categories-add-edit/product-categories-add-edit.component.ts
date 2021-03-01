import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ProductCategoriesService } from '../../../services/product-categories.service';

@Component({
  selector: 'app-product-categories-add-edit',
  templateUrl: './product-categories-add-edit.component.html',
  styleUrls: ['./product-categories-add-edit.component.scss']
})
export class ProductCategoriesAddEditComponent implements OnInit {

  productCategoriesForm: FormGroup;
  productCategoriesId: String;
  productCategories: any = {};
  submitted = false;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private productCategoryService: ProductCategoriesService) {
    this.createForm();
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productCategoriesId = params['Id'];
      console.log("productCategoriesId: ", this.productCategoriesId);
      if (!this.commonService.isUndefiendOrNull(this.productCategoriesId)) {
        this.getProductCategoriesById(this.productCategoriesId);
      }
    })
  }

  createForm() {
    this.productCategoriesForm = this.fb.group({
      pCategoryName: ['', Validators.required]
    });
  }

  get frm() { return this.productCategoriesForm.controls; }

  // Get Product Categories By Id:
  getProductCategoriesById(id) {
    this.productCategoryService.getProductCategoriesById(id)
      .subscribe(
        response => {
          console.log("Get ProductCategories: ", response);
          this.productCategories = response;
          this.productCategoriesForm.patchValue({
            pCategoryName: this.productCategories['data'].pCategoryName
          });
        }
      );
  }

  // Save Product Categories:
  saveproductCategories() {
    this.submitted = true;
    console.log("Form value: ", this.productCategoriesForm.value);

    if (this.productCategoriesForm.invalid) {
      this.productCategoriesForm.get('pCategoryName').markAsTouched();
      return;
    }

    if (!this.commonService.isUndefiendOrNull(this.productCategoriesId)) {
      this.productCategoryService.addEditProductCategories(this.productCategoriesForm.value, this.productCategoriesId)
        .subscribe(
          (async (data: any) => {
            console.log("ProductCategoryUpdated: ", data);
            this.router.navigate(['/productCategories']);
          })
        );
    } else {
      this.productCategoryService.addEditProductCategories(this.productCategoriesForm.value, '')
        .subscribe(
          (async (data: any) => {
            console.log("ProductCategoryAdded: ", data);
            this.router.navigate(['/productCategories']);
          })
        );
    }
  }
}
