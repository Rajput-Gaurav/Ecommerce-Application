import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataTransferService {

  constructor() { }

  public subject = new BehaviorSubject<any>('');

  emit<T>(data: T) {
    this.subject.next(data);
  }

  on<T>(): Observable<T> {
    return this.subject.asObservable();
  }
}
