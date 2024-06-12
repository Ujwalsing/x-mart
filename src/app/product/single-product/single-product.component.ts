import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


import { ProductHttp } from 'src/app/Services/productHTTP.service';
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
  allProducts = [];
  productsService = this.allProducts;
  ProductName = this.product.name;
  

  onEmitProductData = new EventEmitter<{productimage: string,productname: string,productprice: string}>();

  constructor(private productService: ProductHttp, private acitveroute: ActivatedRoute, private productdetails : product, private router: Router, private http: HttpClient, private productDetail: product){};
  ngOnInit(): void {

        console.log(this.ProductName);
        // this.productId = +this.acitveroute.snapshot.params['id']; This is for snapshot the behaviour is url is static rather than dynamic
        this.paramsRouteObs = this.acitveroute.paramMap.subscribe((param)=>{
        this.productId = +param.get('id');
        this.product = this.productdetails.allProducts.find(x => x.id === this.productId);
        this.productDetail.getAllProducts().then((data)=>{
              this.productService = data;
        })
        console.log(this.productService);
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
    // Implement show details logic heres
    alert('Product details shown!');
  }

  onAddToCart(data: {productimage: string,productname: string,productprice: string}){
      this.productService.addToProduct(data);
      this.productService.fetchProduct();
      
   }

  editModeFunction(){
    this.router.navigate(['/product/single-product',this.productId], {queryParams:{edit: true}});
  }

  update(){

    this.router.navigate(['/product/single-product',this.productId], {queryParams:{edit: false}});
    
  }

  onClickEdit(element : HTMLInputElement){
    console.log(element.value); 
  }

  ngOnDestroy(){
      this.paramsRouteObs.unsubscribe();
      
  }

}
