import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { BASE_URL } from 'src/environments/environment';
import { environment as ENV } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroceryService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  getProductByName() {
    var URL = BASE_URL + ENV.GET_PRODUCTS_BY_NAME;
    return this.http.get(URL);
  }

  getProductById(id) {
    var URL = BASE_URL + ENV.GET_PRODUCTS_BY_ID + id;
    return this.http.get(URL, id);
  }

  // getAllGrocery() {
  //   var URL = BASE_URL + ENV.GET_All_GROCERY;
  //   return this.http.get(URL);
  // }

  // getGroceryById(id) {
  //   var URL = BASE_URL + ENV.GET_GROCERY_BY_ID + id;
  //   return this.http.get(URL, id);
  // }
}
