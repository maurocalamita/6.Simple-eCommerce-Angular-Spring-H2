import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { OrderProduct } from '../model/order.product.model';

@Injectable()
export class OrderProductService {

    baseURL: string =  "http://localhost:8080/api/orders";

    constructor(private http: HttpClient) { }


    addProductToOrder(orderProduct: OrderProduct): Observable<string> {
        const url = `${this.baseURL}/${orderProduct.orderId}/products/${orderProduct.productId}`;
        const params = new HttpParams().set('quantity', orderProduct.quantity.toString());
        
        return this.http.post<string>(url, {}, { params });
      }

    

        }