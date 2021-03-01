import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from './common.service';
import { environment as ENV } from '../../environments/environment';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductCategoriesService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  //Create or Insert:
  addEditProductCategories(data, id) {
    var URL = BASE_URL + ((!this.commonService.isUndefiendOrNull(id)) ? (ENV.UPDATE_PRODUCT_CATEGORIES_BY_ID + id) : ENV.CREATE_PRODUCT_CATEGORIES);
    return this.http.post(URL, data);
  }

  // Get data:
  getProductCategories() {
    var URL = BASE_URL + ENV.GET_All_PRODUCT_CATEGORIES;
    return this.http.get(URL);
  }

  // Get data By Id:
  getProductCategoriesById(id) {
    var URL = BASE_URL + ENV.GET_PRODUCT_CATEGORIES_BY_ID + id;
    return this.http.get(URL, id);
  }

  // Delete data By Id:
  deleteProductCategories(id) {
    var URL = BASE_URL + ENV.DELETE_PRODUCT_CATEGORIES_BY_ID + id;
    return this.http.post(URL, id);
  }
}
