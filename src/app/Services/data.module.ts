import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class dataUser{

    constructor(private Logger: LoggerService){

    }
    users = [
        {name:'ujwal',status:'active'},
        {name:'anmol',status:'active'}
      ]

      AddNewUsers(name: string, status: string){
        this.users.push({name: name, status: status});
        this.Logger.LogMessage(name,status);
      }
    }