import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { BASE_URL } from '../../environments/environment';
import { environment as ENV } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  // CREATE OR INSERT SERVICE:
  addEditProducts(data, file: File, id) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('productName', data.productName);
    formData.append('productCategory', data.productCategory);
    formData.append('productRating', data.productRating);
    formData.append('mrp', data.mrp);
    formData.append('status', data.status);
    formData.append('quantity', data.quantity);
    formData.append('totalamount', data.totalamount);

    var URL = BASE_URL + ((!this.commonService.isUndefiendOrNull(id)) ? (ENV.UPDATE_PRODUCTS_BY_ID + id) : ENV.CREATE_PRODUCTS);
    return this.http.post(URL, formData);
  }

  // GET PRODUCTS:
  getAllProducts() {
    var URL = BASE_URL + ENV.GET_All_PRODUCTS;
    return this.http.get(URL);
  }

  // Get Product & Show them through STATUS FILTER:
  getProductByStatusFilter(data) {
    var URL = BASE_URL + ENV.GET_PRODUCTS_BY_FILTER;
    return this.http.post(URL, data);
  }

  // GET PRODUCTS BY ID:
  getProductsById(id) {
    var URL = BASE_URL + ENV.GET_PRODUCTS_BY_ID + id;
    return this.http.get(URL, id);
  }

  // DELETE PRODUCTS BY ID:
  deleteProductsById(id) {
    var URL = BASE_URL + ENV.DELETE_PRODUCTS_BY_ID + id;
    return this.http.post(URL, id);
  }
}
