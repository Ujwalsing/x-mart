import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { ProfileDataService } from "./Services/profiledata.service";

@Injectable()
export class ProfileResolveService implements Resolve<any>{
    constructor(private profileService: ProfileDataService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.profileService.getAllProfiles().then((data) => {
            return data;
        });
    }
}