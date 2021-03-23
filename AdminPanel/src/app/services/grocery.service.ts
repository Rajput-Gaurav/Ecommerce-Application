import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { BASE_URL } from '../../environments/environment';
import { CommonService } from '../services/common.service';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  // CREATE OR UPDATE:
  addEditGrocery(data, file: File, id) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('productName', data.productName);
    formData.append('productCategory', data.productCategory);
    formData.append('productRating', data.productRating);
    formData.append('mrp', data.mrp);
    formData.append('status', data.status);
    formData.append('quantity', data.quantity);
    formData.append('totalamount', data.totalamount);

    var URL = BASE_URL + ((!this.commonService.isUndefiendOrNull(id)) ? (ENV.UPDATE_GROCERY_BY_ID + id) : (ENV.CREATE_GROCERY));
    return this.http.post(URL, formData);
  }

  // GET All GROCERY:
  getAllGrocery() {
    var URL = BASE_URL + ENV.GET_All_GROCERY;
    return this.http.get(URL);
  }

  // GET GROCERY BY ID:
  getGroceryById(id) {
    var URL = BASE_URL + ENV.GET_GROCERY_BY_ID + id;
    return this.http.get(URL, id);
  }

  // GET GROCERY BY FILTER:
  getGroceryByStatusFilter(data) {
    var URL = BASE_URL + ENV.GET_GROCERY_BY_FILTER;
    return this.http.post(URL, data);
  }

  // DELETE GROCERY BY ID:
  deleteGroceryById(id) {
    var URL = BASE_URL + ENV.DELETE_GROCERY_BY_ID + id;
    return this.http.post(URL, id);
  }
}
