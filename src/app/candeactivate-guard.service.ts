import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { ContactComponent } from "./contact/contact.component";

export interface IDeactivateComponent{
    canExit: () =>  Observable<boolean> | Promise<boolean> | boolean ;
}

@Injectable()
export class CanDeactivateGuardService implements CanDeactivate<ContactComponent>{
    
    canDeactivate(component: ContactComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        return component.canExit();
    }
   
}