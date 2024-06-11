import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue: string = '';
  // searchInput(eventData: Event){
  //     this.searchValue = (<HTMLInputElement>eventData.target).value;
  // }
  
  @Output()
  searchChangedFunction: EventEmitter<string> = new EventEmitter<string>();

  onsearchChangedFunction(){
    this.searchChangedFunction.emit(this.searchValue);
    console.log('child',this.searchValue);
  }
}
