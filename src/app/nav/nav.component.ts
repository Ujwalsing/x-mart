import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-nav]',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  logoName: string = "X Mart";
  logosource: string = "";
  logstatus: string = "LOG OUT";
  isMenuVisible = true;
  

  constructor(private authservice: AuthService,private router: Router){}

  logout(){
    this.authservice.logout();
    this.router.navigate(['/Home']);
  }
 
  
}
