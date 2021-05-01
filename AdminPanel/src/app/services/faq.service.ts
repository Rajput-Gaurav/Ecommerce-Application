import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonService } from '../services/common.service';
import { environment as ENV } from '../../environments/environment';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  //CREATE FAQ
  addEditFaq(data, id) {
    var URL = BASE_URL + ((!this.commonService.isUndefiendOrNull(id)) ? (ENV.UPDATE_FAQ_BY_ID + id) : ENV.CREATE_FAQ);
    return this.http.post(URL, data);
  }

  // GET ALL FAQ
  getAllFaq() {
    var URL = BASE_URL + ENV.GET_All_FAQ;
    return this.http.get(URL);
  }

  // GET FAQ BY ID
  getFaqById(id) {
    var URL = BASE_URL + ENV.GET_FAQ_BY_ID + id;
    return this.http.get(URL, id);
  }

  // DELETE FAQ BY ID
  deleteFaqById(id) {
    var URL = BASE_URL + ENV.DELETE_FAQ_BY_ID + id;
    return this.http.post(URL, id);
  }
}
