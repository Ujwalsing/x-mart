import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../Model/products';
import { ProductHttp } from '../Services/productHTTP.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  allProducts: Product[];
  isFetching: boolean = false;

  constructor(
    private route: Router,
    private currentRoute: ActivatedRoute,
    private http: HttpClient,
    private productHttp: ProductHttp
  ) {}

  ngOnInit(): void {
    this.fetchProducts();
  }

  onProductFetch() {
    this.fetchProducts();
  }

  click() {
    this.route.navigate(['/DataForPipe']);
  }

  removeFromCart(id: string) {
    console.log(id);
    
    this.productHttp.removeProduct(id).subscribe(res=>{
      this.fetchProducts();
    });
    // this.onProductFetch();
  }

  clearAllProduct() {
    this.productHttp.clearAllProduct().subscribe(res=>{
      this.fetchProducts();
    });
  }

  private fetchProducts() {
    this.isFetching = true;
    this.productHttp.fetchProduct().subscribe((products) => {
      this.allProducts = products;
      this.isFetching = false;
    });
  }
}
