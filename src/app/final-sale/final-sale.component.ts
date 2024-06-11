import { Component, OnInit } from '@angular/core';
import { Sales } from '../Services/Sales.service';
@Component({
  selector: 'app-final-sale',
  templateUrl: './final-sale.component.html',
  styleUrls: ['./final-sale.component.css']
})
export class FinalSaleComponent implements OnInit {

  constructor(private salesDetail: Sales){};
  
  sales:{id:number,name:string,date:string,image:string}[]=[];


  ngOnInit(): void {
      this.sales = this.salesDetail.sales;
  }

  ShowDetails(sale:{id:number,name:string,date:string,image:string}){
    
  }
}
