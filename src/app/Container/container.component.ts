import { Component, OnInit } from "@angular/core";
import { Sales } from "../Services/Sales.service";
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from "@angular/router";
import { NgxSpinnerService } from "ngx-spinner";

@Component({
    selector: 'app-container',
    templateUrl: './container.component.html',
    styleUrls: ['./container.component.css'],
    providers: [Sales]
})
export class ContainerComponent implements OnInit{
    constructor(private router: Router, private spinner:NgxSpinnerService){}
    ngOnInit(): void {
        this.router.events.subscribe((routerEvent)=>{

            if(routerEvent instanceof NavigationStart){
                this.spinner.show();
            }

            if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
                this.spinner.hide();
            }
        })
    }
    

    
}