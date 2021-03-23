import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from '../../environments/environment';
import { BASE_URL } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HelpSupportService {

  constructor(private http: HttpClient) { }

  // CREATE OR INSERT:
  addSupport(data) {
    var URL = BASE_URL + ENV.CREATE_SUPPORT;
    return this.http.post(URL, data);
  }

  // GET ALL SUPPORT:
  getAllSupport() {
    var URL = BASE_URL + ENV.GET_All_SUPPORT;
    return this.http.get(URL);
  }
}
