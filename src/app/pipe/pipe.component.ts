import { Component, OnInit } from '@angular/core';
import { TableForPipeService } from '../Services/tableforpipe.service';
import { Profile } from '../profile';


@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  data:{id:number, name:string, location:string, Amount: number, Gender: string, Date: string}[];
  _filterText: string = '';
  filteredProfile: Profile[];
  totalProfiles =  new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve(this.filteredProfile.length)
    }, 2000);
  })
  

  get filterText(){
    return this._filterText;
  }

  set filterText(value: string){
    this._filterText = value;
    this.filteredProfile = this.filterProfileByGender(value);
  }

  constructor(private pipeData: TableForPipeService){}
  ngOnInit(): void {
    this.data = this.pipeData.data;
    console.log(this.data);
    this.filteredProfile = this.data; 
  }

  addProfile(){
  //  this.data.push({id:7, name:'Om', location:'Chicago', Amount: 987000, Gender: 'Male', Date: '12th june'}); this is for impure change where the refernce was not changed
    // let profileCopy = Object.assign([], this.data);
    // profileCopy.push({id:7, name:'Elena', location:'Chicago', Amount: 987000, Gender: 'Female', Date: '12th june'})
    // this.data = profileCopy;
    // console.log("Change gender runnning")
    this.data.push({id:7, name: 'Elena',location:'Chicago',Amount: 98900, Gender:'Female', Date: '12th june'})
    this.filteredProfile =  this.filterProfileByGender(this._filterText);
  }
  changeGender(){
     this.data[0].Gender = 'Female';
     this.filteredProfile = this.filterProfileByGender(this._filterText);
    // let changeGender = Object.assign([],this.data);
    // changeGender[0].Gender = 'Female';
    // this.data = changeGender;
  }

  onMouseMove(){}

  filterProfileByGender(filterTerm: string){
    if(this.data.length === 0 || this._filterText === ''){
      return this.data;
    }else {
      const filteredData = this.data.filter((data) => data.Gender.toLowerCase().includes(filterTerm.toLowerCase()))
      return filteredData;
    }
  }
  }


