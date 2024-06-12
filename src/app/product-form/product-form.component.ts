import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {
  constructor(private http: HttpClient){}

  onProductCreate(products: {pCompany: string, pDesc: string, pPrice: number}){
    console.log(products);
    this.http.post('https://ujwal-mart-15423-default-rtdb.firebaseio.com/productDescription.json',products).subscribe((res) =>{
      console.log(res);
    });
    
  }
}
