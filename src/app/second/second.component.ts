import { Component,  EventEmitter,  Input, Output } from '@angular/core';
import { isObservable } from 'rxjs';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent {
  @Input() name: string = '';
  @Input() number: number = 0;
  
  @Output() EmitName: EventEmitter<string> = new EventEmitter<string>();
  @Output() EmitNumber: EventEmitter<number> = new EventEmitter<number>();


  onName(){
    this.EmitName.emit(this.name);
  }
  onNumber(){
    this.EmitNumber.emit(this.number);
  }

}
