import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BASE_URL } from '../../environments/environment';
import { environment as ENV } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }

  updateUserByEmail(email) {
    var URL = BASE_URL + ENV.UPDATE_USER_BY_EMAIL + email;
    return this.http.post(URL, email);
  }
}
