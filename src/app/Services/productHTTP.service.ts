import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Observable, map } from 'rxjs';
import { Product } from "../Model/products";

@Injectable({providedIn: "root"})
export class ProductHttp{
    constructor(private http: HttpClient, private router: Router){}

    addToProduct(data: {productimage: string,productname: string,productprice: string}): any{
        const customHeaders = new HttpHeaders({'myHeader':'UjwalXmartData'})
       return this.http.post<{name: string}>('https://ujwal-mart-15423-default-rtdb.firebaseio.com/cartData.json',data, {headers: customHeaders}).subscribe((res) => {
        console.log(res);
        this.router.navigate(['/Cart']);
        return res;
      });
    }

    fetchProduct(){
        return this.http.get<{[key: string]: Product}>('https://ujwal-mart-15423-default-rtdb.firebaseio.com/cartData.json')
        .pipe(map((res)=>{
         const products = [];
         for(const key in res){
           if(res.hasOwnProperty(key)){
             products.push({...res[key], id: key})
           }
           
         }
         return products;
        }))
    }

    clearAllProduct(): any{
        return this.http.delete('https://ujwal-mart-15423-default-rtdb.firebaseio.com/cartData.json');
    }

    removeProduct(id: string): any{
        return this.http.delete('https://ujwal-mart-15423-default-rtdb.firebaseio.com/cartData/'+id+'.json');
      }

    
}