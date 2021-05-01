import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { BASE_URL } from '../../environments/environment';
import { environment as ENV } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  addCart(data) {
    var URL = BASE_URL + ENV.CREATE_CART;
    return this.http.post(URL, data);
  }

  getAllCart() {
    var URL = BASE_URL + ENV.GET_All_CART;
    return this.http.get(URL);
  }

  getCartById(id) {
    var URL = BASE_URL + ENV.GET_CART_BY_ID + id;
    return this.http.get(URL, id);
  }

  updateCartById(id) {
    var URL = BASE_URL + ENV.UPDATE_CART_BY_ID + id;
    return this.http.post(URL, id);
  }

  deleteCartById(id) {
    var URL = BASE_URL + ENV.DELETE_CART_BY_ID + id;
    return this.http.post(URL, id);
  }
}
