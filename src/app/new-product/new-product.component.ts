import { Component } from '@angular/core';
import { EnrollService } from '../Services/eroll.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css'],
  // providers:[EnrollService]
})
export class NewProductComponent {
  displayNotification: boolean = false;
  closeNotification(){
    this.displayNotification = true; 
  }

  allProducts = [
    {id:1, name: 'Fully Automatic AC ',price: '$199',status: 'Coming Soon...',image:'/assets/image/acc.jpg'},
    {id:2, name: 'LG Washing Machine',price: '$1,999',status: 'Coming Soon...',image: '/assets/image/wash.jpg'},
    {id:3, name: 'Smart TV',price: '$1,999',status: 'Coming Soon...',image: '/assets/image/tv.jpg'},
    {id:4, name: 'Smart Fridge',price: '$2,999',status: 'Coming Soon...',image: '/assets/image/fir.jpg'},
    {id:5, name: 'All Round Oven',price: '$999',status: 'Coming Soon...',image: '/assets/image/oven.webp'},
    {id:6, name: 'Nom Cooler',price: '$4,999',status: 'Coming Soon...',image: '/assets/image/cooler.jpg'},
    {id:7, name: 'Lenovo I5 13th Gen',price: '$7,999',status:  'Coming Soon...',image: '/assets/image/laptop.jpg'},
    {id:8, name: 'Auto Dishwasher',price: '$2,999',status:'Not Available',image: '/assets/image/dish.jpg'}
  ]
  products = this.allProducts;
  searchText: string = '';

  getTotalProduct(){
    return this.products.length;
  }
  getAvailableProduct(){
    return this.products.filter(product=>product.status === 'Available').length;
  }

  productCountRadioButton: string = 'All';
  
  onFilterButtonChanged(data: string){
    this.productCountRadioButton = data;
    console.log("parent",this.productCountRadioButton);
  }

  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log("parent",this.searchText);
    this.products = searchValue == ''? this.allProducts : this.allProducts.filter(prod => prod.name.toLowerCase().includes(this.searchText.toLowerCase()));
  }

  constructor(private enrollService: EnrollService){

  }
  OnEnroll(){
    this.enrollService.onEnrollClicked();
  }
}
