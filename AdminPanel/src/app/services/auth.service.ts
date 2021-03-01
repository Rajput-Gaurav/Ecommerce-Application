import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from './../../environments/environment';
import { environment as ENV } from './../../environments/environment';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CommonService } from './common.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  subject = new Subject();

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  // IMPLEMENT ADMIN LOGIN SERVICE:
  adminLogin(data) {
    var URL = BASE_URL + ENV.ADMIN_LOGIN;
    console.log("service data: ", data);
    return this.http.post(URL, data)
      .pipe(
        map(data => {
          // store data in localStorage:
          localStorage.setItem("user", JSON.stringify(data));
          // check admin user:
          this.subject.next(this.checkUser());
          return data;
        })
      )
  }

  // IMPLEMENT ADMIN LOGOUT METHOD:
  adminLogout() {
    localStorage.removeItem("user");
    // check user available or not:
    this.subject.next(this.checkUser());
  }

  // IMPLEMENT CHECK USER METHOD:
  checkUser() {
    return JSON.parse(localStorage.getItem("user"));
  }

  // CREATE OR INSERT ADMIN USER:
  addEditAdminUser(data, id) {
    var URL = BASE_URL + ((!this.commonService.isUndefiendOrNull(id)) ? (ENV.UPDATE_ADMIN_USER_BY_ID + id) : ENV.CREATE_ADMIN_USER);
    return this.http.post(URL, data);
  }

  // GET ADMIN USER:
  getAdminUser() {
    var URL = BASE_URL + ENV.GET_ADMIN_USER;
    return this.http.get(URL);
  }

  // GET ADMIN USER BY ID:
  getAdminUserById(id) {
    var URL = BASE_URL + ENV.GET_ADMIN_USER_BY_ID + id;
    return this.http.get(URL, id);
  }

  // UPDATE ADMIN USER BY ID:
  updateAdminUser(id) {
    var URL = BASE_URL + ENV.UPDATE_ADMIN_USER_BY_ID + id;
    return this.http.post(URL, id);
  }

  // DELETE ADMIN USER BY ID:
  deleteAdminUser(id) {
    var URL = BASE_URL + ENV.DELETE_ADMIN_USER_BY_ID + id;
    return this.http.post(URL, id);
  }
}
