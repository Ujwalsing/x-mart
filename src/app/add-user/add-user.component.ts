import { Component, OnInit } from '@angular/core';
import { dataUser } from '../Services/data.module';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
  // providers: [dataUser]
})
export class AddUserComponent implements OnInit{
  username: string = '';
  status: string = 'active';

  constructor(private userService: dataUser){}



    ngOnInit():void{

  }
  AddUser(){
    this.userService.AddNewUsers(this.username,this.status);
    // console.log(this.userService.users);
  }
}
