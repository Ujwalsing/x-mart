import { Component, OnInit } from '@angular/core';
import { dataUser } from '../Services/data.module';
import { LoggerService } from '../Services/logger.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [dataUser, LoggerService]
})
export class UsersComponent implements OnInit {

  constructor(private userData: dataUser, private LoggerService: LoggerService){}

  users:{name: string,status: string}[] = [];

  ngOnInit(): void {
    this.users = this.userData.users;
  }

  
}
