import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ErrorComponent } from './error/error.component';
import { ProductService } from './service/product.service';
import { ProductListComponent } from './page/product-list/product.list.component';
import { CarrelloComponent } from './page/carrello/carrello.component';
import { OrderService } from './service/order.service';
import { OrderComponent } from './page/order/order.component';
import { OrderProductService } from './service/order.product.service';
import { AddProductToOrderComponent } from './page/order-product/order.product.component';

@NgModule({
  declarations: [
    AppComponent,ErrorComponent,ProductListComponent,CarrelloComponent,OrderComponent,AddProductToOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductService,OrderService,OrderProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
