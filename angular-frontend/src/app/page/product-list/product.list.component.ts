import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { FeedBack } from '../../feedback/feedback.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpParams } from '@angular/common/http';


@Component({
  templateUrl: './product.list.component.html',
})
export class ProductListComponent {
 
  isLoading: boolean = true;
  feedback: FeedBack = { feedbackType: "", feedbackmsg: "" };
  products: Product[] = [];
  product: Product = { id: "",  name: "", price: "" ,pictureUrl:""};
  totalProducts: number = 0;
  pagination: number = 0;
  productPage: number = 10;
  sortField: string = "name"
  sortOrder: string = 'desc';
  quantityForm: FormGroup;
  cart: { name: string, price: number, quantity: number }[] = [];
  total:number=0;

  constructor(private productService: ProductService, private router: Router,private fb: FormBuilder) {

    this.quantityForm = this.fb.group({
        quantity: [1] // Imposta il valore predefinito a 1
      });
  }

  ngOnInit() {

    this.loadAllProduct();

      this.feedback = { feedbackType: '', feedbackmsg: '' };
      //localStorage.removeItem('id');
      
  }

  loadAllProduct() {

    let params = new HttpParams;

    params = params.append('page', String(this.pagination));
    params = params.append('size', ""+this.productPage);
    params = params.append('sort', ""+this.sortField);
    params = params.append('order', ""+this.sortOrder);
    
      this.products=[];
      this.productService.getProducts(params).subscribe({
        next: (data: any) => { 
          if (data.length !== 0) {
            console.log(data);
            this.products = data.products;
            this.totalProducts = data.totalItems;
          };
          
        },
        error: (err: any) => {
            
          this.isLoading=false;
          console.log(err);
          this.feedback = {
            feedbackType: err.feedbackType,
            feedbackmsg: err.feedbackmsg,
          };
          
          //console.log(JSON.stringify(this.feedback));
          //throw new Error();    //metterlo in ogni componente sia della person che della product nel caso di global error handler 
        },
        complete: () => {
          this.isLoading = true;
          this.feedback = { feedbackType: 'success', feedbackmsg: 'loaded' };
        },
      });
    }
  
    renderPage(event: number) {
        this.pagination = event - 1;
        this.loadAllProduct();
    }

    changeSortOrder(order: string): void {
        console.log(order);
        this.sortOrder = order;
       this.loadAllProduct();
      }
    
      //con un pulsante solo
     /* toggleSortOrder() {   
        this.order = this.order === 'ASC' ? 'DESC' : 'ASC';
        this.onSearch();
    }
        */

    addCart(product: any) {
        if (product.quantity > 0) {
          const cartItem = {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: product.quantity
          };
          //console.log(product.id);
          this.cart.push(cartItem);
          this.total += product.price * product.quantity
          product.quantity = 0; // Reset quantity after adding to cart
        } else {
          // Handle the case where quantity is 0 or invalid
          console.error('Invalid quantity');
        }
      }

      checkout() {
        localStorage.setItem('cart',JSON.stringify(this.cart));
        localStorage.setItem('total',this.total.toString()); 
      }
    
}