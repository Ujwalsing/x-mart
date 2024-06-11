import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() all: number = 0;
  @Input() available: number = 0;


  @Output() selectedRadioButton: string = 'All';
  @Output() filterRadioButton : EventEmitter<string> = new EventEmitter<string>();

  onradioselectchange(){
    this.filterRadioButton.emit(this.selectedRadioButton);
    console.log("child",this.selectedRadioButton);
  }
}
