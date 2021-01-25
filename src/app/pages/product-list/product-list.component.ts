import { Component, OnInit } from '@angular/core';
import products from './procuts'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }
  share (name){
    alert(`${name} is shared`)
  }
  onNotify() {
    alert('You will be notified when the product goes on sale');
  }
  ngOnInit() {

  }

}
