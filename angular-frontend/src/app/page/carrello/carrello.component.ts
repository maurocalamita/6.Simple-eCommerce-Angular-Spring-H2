import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { FeedBack } from '../../feedback/feedback.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpParams } from '@angular/common/http';


@Component({
  templateUrl: './carrello.component.html',
})
export class CarrelloComponent {
 
  isLoading: boolean = true;
  feedback: FeedBack = { feedbackType: "", feedbackmsg: "" };
  products: Product[] = [];
  product: Product = { id: "",  name: "", price: "" ,pictureUrl:""};
  totalProducts: number = 0;
  pagination: number = 0;
  productPage: number = 5;
  sortField: string = "name"
  sortOrder: string = 'desc';
  quantityForm: FormGroup;
  cart: [] = [];
  total:string;

  constructor(private productService: ProductService, private router: Router,private fb: FormBuilder) {

   
  }

  ngOnInit() {

    this.cart = JSON.parse(localStorage.getItem('cart'));
    if(!this.cart) {
        alert("Something went wrong!");
        this.router.navigate(['']);
        return;
    }

    this.total = localStorage.getItem('total');
    if(!this.total) {
        alert("Something went wrong!");
        this.router.navigate(['']);
        return;
    }

      this.feedback = { feedbackType: '', feedbackmsg: '' };
      
      
  }

  pay() {
    const order = {
      items: this.cart,
      total: this.total,
      status: new Date(),
    };

    // Save the order details to local storage
    localStorage.setItem('order', JSON.stringify(order));

    // Navigate to the order confirmation page
    this.router.navigate(['/order']);
  }

}