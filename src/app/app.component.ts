import { Component } from '@angular/core';
import { EnrollService} from './Services/eroll.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EnrollService]  
})
export class AppComponent {

  name: string = 'Ujwal';

    
 constructor(private enrollService: EnrollService){

 }


  OnEnroll(){
    this.enrollService.onEnrollClicked();
  }

 
}
