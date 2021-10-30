import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ICategory } from '../viewmodel/icategory';
import { IProduct } from '../viewmodel/iproduct';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataFromApiService {
  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(environment.APIURL + '/products');
  }
  getProductsByCatID(selectedCategoryFromNested: number): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(
      environment.APIURL + '/products?CategoryID=' + selectedCategoryFromNested
    )
  }
  getProductByID(prodID: number): Observable<IProduct> {
    return this.httpClient.get<IProduct>(
      environment.APIURL + '/products/' + prodID
    );
  }
  addProduct(id: number): Observable<IProduct> {
   return this.httpClient.post<IProduct>(`${environment.APIURL}/products`,
   { "id": id, "Name": "added by json serve with id " + id, "Price": 100, "Quantity": id, "CategoryID": 5, "ImgURL": "https://picsum.photos/200" }
   )
  }
}
