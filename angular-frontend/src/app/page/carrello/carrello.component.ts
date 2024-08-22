import { Component } from '@angular/core';
import { ProductService } from '../../service/product.service';
import { Product } from '../../model/product.model';
import { FeedBack } from '../../feedback/feedback.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpParams } from '@angular/common/http';
import { OrderService } from 'src/app/service/order.service';
import { OrderProductService } from 'src/app/service/order.product.service';
import { OrderProduct } from 'src/app/model/order.product.model';


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
  orderProduct: OrderProduct = {productId:null, orderId:null};

  

  constructor(
     private productService: ProductService,
     private router: Router,private fb: FormBuilder,
     private orderService: OrderService,
     private orderProductService:OrderProductService
    ) {}

  
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

    let orderStatus={status: 'PAID'};

   

    this.orderService.addOrder(orderStatus).subscribe({
      next: (data: any) => { 
        if (data.length !== 0) {
          this.pay1(data.id);
          this.feedback = {
            feedbackType: "success",
            feedbackmsg: "Payment successfull",
          };
          setTimeout(() => {
            this.feedback = { feedbackType: "success", feedbackmsg: "Payment successfull" };
        }, 3000); 

        };
        
      },
      error: (err: any) => {
          
        this.isLoading=false;
        console.log(err);
        this.feedback = {
          feedbackType: err.feedbackType,
          feedbackmsg: err.feedbackmsg,
        };
        
      },
      complete: () => {
        
        
      },
    });

    
    // Navigate to the order confirmation page
    //this.router.navigate(['/order-product']);
  }

  pay1(orderId) {

    this.cart.forEach((item: any) => { // Itera sugli oggetti nel carrello
      let params = new HttpParams;
        this.orderProduct = {
            orderId: orderId,               
            productId: item.id           
                    
        };
        params = params.append('quantity', item.quantity.toString());
        
        this.orderProductService.addProductToOrder(this.orderProduct , params).subscribe({
            next: (data: any) => {
                if (data) {
                }
            },
            error: (err: any) => {
                this.isLoading = false;
                console.log(err);
                this.feedback = {
                    feedbackType: err.feedbackType,
                    feedbackmsg: err.feedbackmsg,
                };
            },
            complete: () => {
                this.isLoading = true;
            },
        });
    });
}


}