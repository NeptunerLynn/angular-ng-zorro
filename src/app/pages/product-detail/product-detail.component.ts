import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import products from '../product-list/procuts'
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  products = products;
  product;
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

  addToCart(product) {
    this.cartService.addToCart(product);
    alert('Your product has been added to the cart!');
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.product = products.find(v => v.id == +params.get('productId'));
    });
  }
}
