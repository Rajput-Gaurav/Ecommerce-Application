import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

// Implement method to access the global object:
function _window(): any {
  return window;
}

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  // get object:
  get nativeWindow(): any {
    return _window();
  }

  // CREATE SUBJECT VARIABLE:
  cartSubject = new Subject<any>();
  userdata: any = [];

  constructor() { }

  // check value is null, undefiend or blank:
  public isUndefiendOrNull(value) {
    if (value == 'undefiend' || value == null || value == '') {
      return true;
    } else {
      return false;
    }
  }

  // get data from localStorage:
  public getUserData() {
    this.userdata = JSON.parse(localStorage.getItem('user'));
    console.log("userData: ", this.userdata);
  }

  // return only true and false:
  checkUser() {
    return !!localStorage.getItem('user');
  }
}
