import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor() { }

  // CHECK VALUE NULL OR UNDEFIEND OR BLANK:
  public isUndefiendOrNull(value) {
    if (value == 'undefiend' || value == null || value == "") {
      return true;
    } else {
      return false;
    }
  }

  // GET ADMIN DATA FROM LOCALSTORAGE:
  getData() {
    return JSON.parse(localStorage.getItem("user"));
  }
}
