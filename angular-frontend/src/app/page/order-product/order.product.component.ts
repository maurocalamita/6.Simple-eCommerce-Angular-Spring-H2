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
  //orderProduct: OrderProduct = { orderId: null, productId: null, quantity: 1 };
  orderProduct=[];

  constructor(private orderProductService: OrderProductService) {}

  ngOnInit() {

    this.orderProduct= JSON.parse(localStorage.getItem('order'));
    

    /*this.orderProductService.addProductToOrder(this.orderProduct).subscribe(response => {
        console.log('Product added to order successfully:', response);
        // Puoi aggiungere logica aggiuntiva, come il reset del form o la visualizzazione di un messaggio di successo
      });
      */
  }

  addProductToOrder() {
   
  }
}
