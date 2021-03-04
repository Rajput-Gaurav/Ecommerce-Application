import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.scss']
})
export class ProductsViewComponent implements OnInit {

  allProducts: any = [];
  filterValue = 'All';

  constructor(private productService: ProductsService,
    private router: Router) { }

  ngOnInit(): void {
    this.getAllProductByFilter();
  }

  // GET ALL PRODUCTS && GET THROUGH STATUS:
  getAllProductByFilter() {

    let filterObj = {
      status: this.filterValue,
      apiForm: 'Admin'
    };
    this.productService.getProductByStatusFilter(filterObj)
      .subscribe(
        (async (data: any) => {
          console.log("data: ", data);
          if (data.status == 'success') {
            this.allProducts = (data && data.data) ? data.data : [];
          } else {
            this.allProducts = [];
          }
        })
      );
  }

  // DELETE SELECTED PRODUCTS:
  deleteProducts(products) {
    if (products._id) {
      var productsId = products._id;
      this.productService.deleteProductsById(productsId)
        .subscribe(
          (async (data: any) => {
            console.log("Selected Products Deleted Successfully!");
            this.getAllProductByFilter();
          })
        );
    }
  }

  // CHANGE STATUS VALUE:
  onOptionsSelected(value: string) {
    this.filterValue = value;
    this.getAllProductByFilter();
  }
}
