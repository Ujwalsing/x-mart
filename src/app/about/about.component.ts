import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit{
  profiles: {id:number, name: string,image:string,linkedin: string, designation: string}[];

  constructor(private route: Router, private activeRoute: ActivatedRoute){}

  ngOnInit():void{
    this.profiles = this.activeRoute.snapshot.data['profiles'];
  }

  goToHome(){

    this.route.navigateByUrl('Home');
    
    this.route.navigate(['Home'],{relativeTo: this.activeRoute});
  }
}
