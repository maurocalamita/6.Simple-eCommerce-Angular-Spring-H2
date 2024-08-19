import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Order } from '../model/order.model';

@Injectable()
export class OrderService {

    baseURL: string =  "http://localhost:8080/api/orders";

    constructor(private http: HttpClient) { }


    addOrder(order:any): Observable<any> {
        const headers = { 'content-type': 'application/json'}  
        const body=JSON.stringify(order);
        //console.log(body)
        return this.http.post<any>(this.baseURL + '/create', body,{'headers':headers})
        
      }

        }