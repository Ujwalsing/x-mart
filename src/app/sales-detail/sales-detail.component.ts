import { Component } from '@angular/core';
import { Sales } from '../Services/Sales.service';

@Component({
  selector: 'app-sales-detail',
  templateUrl: './sales-detail.component.html',
  styleUrls: ['./sales-detail.component.css'],
})
export class SalesDetailComponent {
  constructor(private salesDetail: Sales) {}

  SalesData: { id?: number; name?: string; date?: string; image?: string } = {};

  ngOnInit(): void {
    this.salesDetail.OnShowDetailsClicked.subscribe((data: { id: number; name: string; date: string; image: string }) => {
        console.log("received",data);
        
        this.SalesData = data;
      }
    );
  }
}
