import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { product } from "./Services/productdetails.service";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductResolveService implements Resolve<any>{
    constructor(private productService: product){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.productService.getAllProducts().then((data) => {
            return data;
        });
    }
}