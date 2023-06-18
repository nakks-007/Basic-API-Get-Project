import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PinCodeAPIService {

  private url = 'https://api.postalpincode.in/pincode/600062'

  constructor(private http : HttpClient) { }

  getPincode() {
    return this.http.get(this.url);
  }
}
