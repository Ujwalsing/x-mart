import { Component, OnInit } from '@angular/core';
import { product } from '../Services/productdetails.service';


@Component({
  selector: 'app-homedesign2',
  templateUrl: './homedesign2.component.html',
  styleUrls: ['./homedesign2.component.css'],

})
export class Homedesign2Component implements OnInit {
  products:{ id: number; name: string; price: string; status: string; image: string; }[]=[];

  constructor(private productdetail: product){};

  ngOnInit(): void {
      this.products = this.productdetail.allProducts;
  }
}
