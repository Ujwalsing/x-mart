import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./app/auth.service";

@Injectable()
export class ProductGuardService implements CanActivate, CanActivateChild{
    constructor(private authService: AuthService, private router: Router){

    }
    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return this.canActivate(childRoute,state);
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
        if(this.authService.isAuthenticate()){
            return true;
        }else{
            this.router.navigate(['/Login']);
            return false;
        }
    }

}