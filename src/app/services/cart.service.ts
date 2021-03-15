import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http:HttpClient) { }

  getProductDetails(){
    return this.http.get<any>('http://makeup-api.herokuapp.com/api/v1/products.json')
  }
}
