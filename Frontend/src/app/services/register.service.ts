import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { environment as ENV } from '../../environments/environment';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  addEditUsers(data, file: File, id) {

    const formData = new FormData();
    formData.append('image', file);
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('email', data.email);
    formData.append('mobileNo', data.mobileNo);
    formData.append('address', data.address);
    formData.append('zipCode', data.zipCode);
    formData.append('password', data.password);

    var URL = BASE_URL + ((!this.commonService.isUndefiendOrNull(id)) ? (ENV.UPDATE_USERS_BY_ID + id) : ENV.CREATE_USERS);
    return this.http.post(URL, formData);
  }

  getAllUsers() {
    var URL = BASE_URL + ENV.GET_All_USERS;
    return this.http.get(URL);
  }

  getUsersById(id) {
    var URL = BASE_URL + ENV.GET_USERS_BY_ID + id;
    return this.http.get(URL, id);
  }

  updateUsers(id) {
    var URL = BASE_URL + ENV.UPDATE_USERS_BY_ID + id;
    return this.http.post(URL, id);
  }

  deleteUsers(id) {
    var URL = BASE_URL + ENV.DELETE_USERS_BY_ID + id;
    return this.http.post(URL, id);
  }
}
