import { Component, ViewChild } from '@angular/core';
import { NgImageSliderComponent } from 'ng-image-slider';

@Component({
  selector: 'app-homedesign1',
  templateUrl: './homedesign1.component.html',
  styleUrls: ['./homedesign1.component.css'],
})
export class Homedesign1Component {
  @ViewChild('imageSlider') slider: NgImageSliderComponent;
  imageObject: Array<object> = [
    {
      image: 'assets/image/airpod.png',
      thumbImage: 'assets/image/adv3.jpg',
      title: 'Airpod',
    },
    {
      image: 'assets/image/phone.png',
      thumbImage: 'assets/image/phone.png',
      title: 'Phone',
    },
    {
      image: 'assets/image/laptop.png',
      thumbImage: 'assets/image/laptop.png',
      title: 'Laptop',
    },
  ];

  
}
