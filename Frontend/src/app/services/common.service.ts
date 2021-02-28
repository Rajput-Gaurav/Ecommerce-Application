import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  userdata: any[];

  constructor() { }

  public isUndefiendOrNull(value) {
    if (value == 'undefiend' || value == null || value == '') {
      return true;
    } else {
      return false;
    }
  }

  public getUserData() {
    this.userdata = JSON.parse(localStorage.getItem('user'));
    console.log("userData: ", this.userdata);
  }

  // return only true and false:
  checkUser() {
    return !!localStorage.getItem('user');
  }
}
