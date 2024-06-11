import { Component, OnInit } from '@angular/core';
import { Sales } from '../Services/Sales.service';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit{

  constructor(private salesDetail: Sales){
  
  }
  sales:{id:number,name:string,date:string,image:string}[] = [];

  ngOnInit(): void{
    console.log(this.salesDetail.sales);
    
     this.sales = this.salesDetail.sales;
  }

  ShowDetails(sale: {id:number,name:string,date:string,image:string}){
    this.salesDetail.ShowSalesDetail(sale);
  }

}
