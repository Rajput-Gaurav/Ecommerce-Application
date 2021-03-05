import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { environment as ENV } from '../../environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  // CREATE OR INSERT DATA:
  addEditUser(data, file: File, id) {
    const formData = new FormData();
    formData.append('image', file);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('mobileNo', data.mobileNo);
    formData.append('address', data.address);
    formData.append('zipCode', data.zipCode);
    formData.append('password', data.password);

    var URL = BASE_URL + ((!this.commonService.isUndefiendOrNull(id)) ? (ENV.UPDATE_USER_BY_ID + id) : ENV.CREATE_USER);
    return this.http.post(URL, formData);
  }

  // GET USER DATA:
  getUser() {
    var URL = BASE_URL + ENV.GET_USER;
    return this.http.get(URL);
  }

  // GET USER DATA BY ID:
  getUserById(id) {
    var URL = BASE_URL + ENV.GET_USER_BY_ID + id;
    return this.http.get(URL, id);
  }

  // UPDATE USER DATA BY ID:
  updateUserById(id) {
    var URL = BASE_URL + ENV.UPDATE_USER_BY_ID + id;
    return this.http.post(URL, id);
  }

  // DELETE USER DATA BY ID:
  deleteUserById(id) {
    var URL = BASE_URL + ENV.DELETE_USER_BY_ID + id;
    return this.http.post(URL, id);
  }
}
