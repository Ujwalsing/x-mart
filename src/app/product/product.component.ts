import { Component, OnInit } from '@angular/core';
import { EnrollService } from '../Services/eroll.service';
import { product } from '../Services/productdetails.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  // providers:[EnrollService]
})
export class ProductComponent implements OnInit{
  displayNotification: boolean = false;
  closeNotification(){
    this.displayNotification = true; 
  }
  
  
 constructor(private productdetail: product,private enrollService: EnrollService, private router:Router, private route: ActivatedRoute){};

  allProducts = []
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

  OnEnroll(){
    this.enrollService.onEnrollClicked();
  }


  ngOnInit(): void {
      //this.allProducts = this.productdetail.allProducts;
      // this.productdetail.getAllProducts().then((data) => {
      //   this.products = data;
      // });
      this.products = this.route.snapshot.data['products'];
       
  }

  login(){
    this.router.navigate(['/Login']);
  }
}
