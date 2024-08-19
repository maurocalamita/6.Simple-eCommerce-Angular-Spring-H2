import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ProductListComponent } from './page/product-list/product.list.component';
import { CarrelloComponent } from './page/carrello/carrello.component';
import { AddProductToOrderComponent } from './page/order-product/order.product.component';

const routes: Routes = [
  { path: 'list', component: ProductListComponent },
  { path: 'cart', component: CarrelloComponent },
  { path: 'order-product', component: AddProductToOrderComponent },
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
