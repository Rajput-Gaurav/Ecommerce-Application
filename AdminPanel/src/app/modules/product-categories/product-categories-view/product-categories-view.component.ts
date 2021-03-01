import { Component, OnInit } from '@angular/core';
import { ProductCategoriesService } from '../../../services/product-categories.service';

@Component({
  selector: 'app-product-categories-view',
  templateUrl: './product-categories-view.component.html',
  styleUrls: ['./product-categories-view.component.scss']
})
export class ProductCategoriesViewComponent implements OnInit {

  productCategories: any = [];

  constructor(private productCategoriesService: ProductCategoriesService) { }

  ngOnInit(): void {
    this.getAllProductCategories();
  }

  // Get All ProductCategories:
  getAllProductCategories() {
    this.productCategoriesService.getProductCategories()
      .subscribe(
        (async (data: any) => {
          console.log("Get All ProductCategories: ", data);
          this.productCategories = (data && data.data) ? data.data : [];
        })
      );
  }

  // Delete ProductCategories By Id:
  deleteProductCategories(pcategory) {
    if (pcategory._id) {
      var productCategoriesId = pcategory._id;
      this.productCategoriesService.deleteProductCategories(productCategoriesId)
        .subscribe(
          (async (data: any) => {
            console.log("data deleted successfully!!!");
            this.getAllProductCategories();
          })
        )
    }
  }
}
