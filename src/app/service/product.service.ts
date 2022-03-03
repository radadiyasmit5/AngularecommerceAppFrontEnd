import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Product from '../classes/product';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ProductserviceService {
  constructor(private httpclient: HttpClient) {}

  url = 'http://localhost:8090/api/product';

  getproducts(): Observable<any> {
    return this.httpclient
      .get(`${this.url}/getproducts`)
      .pipe(map((response) => response));
  }

  getproductsbycategory(id: number): Observable<any> {
    return this.httpclient.get(`${this.url}/getProductByCategory?id=${id}`);
  }
}

// interface Getresponse {
//   _embedded: {
//     products: Product[];
//   };
// }
