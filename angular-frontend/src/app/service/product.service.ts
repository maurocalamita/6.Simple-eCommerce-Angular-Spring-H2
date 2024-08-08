import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Product } from '../model/product.model';

@Injectable()
export class ProductService {

    baseURL: string =  "http://localhost:8080/api/products";

    constructor(private http: HttpClient) { }


    // Retrieve all product
    getProducts(params:HttpParams): Observable<Product[]> {
      return this.http.get<Product[]>(this.baseURL + '/', { params }) 
         
      }

    getProduct(id: string): Observable<Product> {
        return this.http.get<Product>(this.baseURL + '/'+ id)
        
      }

    

        }