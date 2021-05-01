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

  getAllFaq() {
    var URL = BASE_URL + ENV.GET_All_FAQ;
    return this.http.get(URL);
  }
}
