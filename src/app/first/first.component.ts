import { Component } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {
  name: string = ''; 
  number: number = 0;

  setName(searchValue: string){
    this.name = searchValue;
  }

  setNumber(searchValue: number){
    this.number = searchValue;
  }
}
