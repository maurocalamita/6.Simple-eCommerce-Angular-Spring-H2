import { Component, OnInit } from '@angular/core';
import { FeedBack } from '../../feedback/feedback.model';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { HttpParams } from '@angular/common/http';

@Component({
  templateUrl: './order.component.html',
})
export class OrderComponent implements OnInit {
  order: any;

  ngOnInit() {
    this.order = JSON.parse(localStorage.getItem('order'));
    if (!this.order) {
      alert('No order found!');
    }
  }
}
