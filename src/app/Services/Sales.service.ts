import { EventEmitter } from "@angular/core"

export class Sales{
    sales = [
        {id:1,name:'Summer Sales',date:'30th May 2024',image:"/assets/image/summersales.jpg"},
        {id:2,name:'Winter Sales',date:'30th November 2024',image:"/assets/image/wintersale.png"},
        {id:3,name:'Spring Sales',date:'30th September 2024',image:"/assets/image/springsales.jpg"}
    ]


    OnShowDetailsClicked = new EventEmitter<{id:number,name:string,date:string,image:string}>();

    ShowSalesDetail(sale:{id:number,name:string,date:string,image:string}){
        console.log("emitting",sale);
        
        this.OnShowDetailsClicked.emit(sale);
    }
}