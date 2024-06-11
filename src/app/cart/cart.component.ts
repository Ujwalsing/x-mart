import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private route: Router, private currentRoute: ActivatedRoute){}
  click(){
    this.route.navigate(['/DataForPipe']);
  }
}
