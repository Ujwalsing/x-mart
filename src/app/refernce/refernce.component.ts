import { Component, ElementRef, ViewChild } from '@angular/core';
import { DemoComponent } from '../demo/demo.component';

@Component({
  selector: 'app-refernce',
  templateUrl: './refernce.component.html',
  styleUrls: ['./refernce.component.css']
})
export class RefernceComponent {
 

  @ViewChild('dateData') dateData: ElementRef;
  @ViewChild('ageData') ageData: ElementRef;
  @ViewChild(DemoComponent, {static:true}) demoComp: DemoComponent;
  displaydata(){
    let birthYear = new Date(this.dateData.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    this.ageData.nativeElement.value = age;
    // console.log(this.dateData);
    // console.log(this.ageData);
  }
}
