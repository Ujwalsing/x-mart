import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { product } from 'src/app/Services/productdetails.service';


@Component({
  selector: 'C',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.css']
})
export class SingleProductComponent implements OnInit,OnDestroy{
  product:any={};
  productId :number;
  paramsRouteObs;
  editMode:boolean = false;

  onEmitProductData = new EventEmitter<{productimage: string,productname: string,productprice: string}>();

  constructor(private acitveroute: ActivatedRoute, private productdetails : product, private router: Router){};
  ngOnInit(): void {
      // this.productId = +this.acitveroute.snapshot.params['id']; This is for snapshot the behaviour is url is static rather than dynamic
      this.paramsRouteObs = this.acitveroute.paramMap.subscribe((param)=>{
        this.productId = +param.get('id');
        this.product = this.productdetails.allProducts.find(x => x.id === this.productId);
      })
     
      console.log(this.productId);

      this.acitveroute.queryParamMap.subscribe((param)=>{
        this.editMode = param.get('edit') == 'true' ;
        console.log(this.editMode);
      })
  }
  buyProduct(): void {
    // Implement buy product logic here
    alert('Product bought!');
  }
  showDetails(): void {
    // Implement show details logic here
    alert('Product details shown!');
  }

  onAddToCart(data: {productimage: string,productname: string,productprice: string}){
      console.log(data);
      this.onEmitProductData.emit(data);
      
   }

  editModeFunction(){
    this.router.navigate(['/product/single-product',this.productId], {queryParams:{edit: true}});
  }

  update(){

    this.router.navigate(['/product/single-product',this.productId], {queryParams:{edit: false}});
    
  }

  ngOnDestroy(){
      this.paramsRouteObs.unsubscribe();
      
  }

}
