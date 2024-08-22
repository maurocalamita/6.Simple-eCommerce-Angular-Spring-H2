import { Component, OnInit } from '@angular/core';
import { OrderProductService } from 'src/app/service/order.product.service';
import { OrderProduct } from 'src/app/model/order.product.model';
import { FeedBack } from '../../feedback/feedback.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpParams } from '@angular/common/http';

@Component({
  
  templateUrl: './order.product.component.html',

})
export class AddProductToOrderComponent implements OnInit {

  orderProduct=[];
  cart = [];

  constructor(private orderProductService: OrderProductService) {}

  ngOnInit() {

    //this.orderProduct= JSON.parse(localStorage.getItem('order'));
   
    this.cronOrdini();
    //window.location.reload();
  }

  cronOrdini() {
  this.cart = [];
  this.orderProductService.getAllOrdersProducts().subscribe({
    next: (data: any) => { 
      if (data.length !== 0) {
        console.log(data);
        this.cart = data.content.map(order => ({
          orderId: order.id.orderId,
          productName: order.product.name,
          quantity: order.quantity,
          dateCreated: order.order.dataCreated
        }));
      };
      console.log(this.cart);
      //window.location.reload();
      
    },
    error: (err: any) => {
      console.log(err);
      /*this.feedback = {
        feedbackType: err.feedbackType,
        feedbackmsg: err.feedbackmsg,
      };*/
    },
    complete: () => {
      
      
    },
  });

}

}
