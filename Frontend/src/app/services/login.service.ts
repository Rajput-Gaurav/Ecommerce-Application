import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { environment as ENV } from '../../environments/environment';
import { CommonService } from '../services/common.service';
import { map } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  subject = new Subject();

  constructor(private http: HttpClient,
    private commonService: CommonService) { }

  // IMPLEMENT LOGIN USERS METHOD:
  userlogin(data) {
    var URL = BASE_URL + ENV.USERS_LOGIN;
    console.log("Service data: ", data);
    return this.http.post(URL, data)
      .pipe(
        map(data => {
          localStorage.setItem('user', JSON.stringify(data));
          this.subject.next(this.checkUsers);
          return data;
        })
      )
  }

  // CHECK USERS METHOD:
  checkUsers() {
    return JSON.parse(localStorage.getItem('user'));
  }

  // logout:
  logout() {
    localStorage.removeItem('user');
    // check user available or not:
    this.subject.next(this.checkUsers);
  }
}
