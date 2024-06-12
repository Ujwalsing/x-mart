import { Component, OnInit } from '@angular/core';
import { product } from '../Services/productdetails.service';
import { Product } from '../Model/products';
import { ProductHttp } from '../Services/productHTTP.service';


@Component({
  selector: 'app-homedesign2',
  templateUrl: './homedesign2.component.html',
  styleUrls: ['./homedesign2.component.css'],

})
export class Homedesign2Component implements OnInit {
  products:{ id: number; name: string; price: string; status: string; image: string; }[]=[];

  constructor(private productdetail: product, private productService: ProductHttp){};

  ngOnInit(): void {
      this.products = this.productdetail.allProducts;
  }

  onAddToCart(data: {productimage: string,productname: string,productprice: string}){
    this.productService.addToProduct(data);
    
 }
}
