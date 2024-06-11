import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  defaultCountry = 'India';
  defaultGender = 'Male';
  Country: string;
  email: string;
  gender: string;
  password:string;
  username:string;

  Gender = [
    {id: '1', value: 'Male'},
    {id: '2', value: 'Female'},
    {id: '3', value: 'Other'}
  ]
  @ViewChild('myForm') form :NgForm;

  constructor(private route: Router){}
  onSubmit(){
    console.log(this.form);
    // this.route.navigate(['/Login']);

    this.Country = this.form.value.personalDetails.Country;
    this.email = this.form.value.personalDetails.email;
    this.gender = this.form.value.personalDetails.gender;
    this.password = this.form.value.personalDetails.password;
    this.username = this.form.value.personalDetails.username;

    this.form.reset();
  }

  setDefaultValue(){
    // this.form.value.personalDetails.email = "ujwal"; 
    // console.log("check value "+ JSON.stringify(this.form.value.personalDetails));
    // let data = {
     
    //   personalDetails: {
    //     Country: "India",
    //     email: "ujwal@gmail.com",
    //     gender: "Male",
    //     password:"",
    //     username:"Ujwal7178"
    //   }
    // }
    // this.form.setValue(data);
     this.form.form.patchValue({
      personalDetails: {
        Country: 'India',
        email: 'ujwalsingh@gmail.com',
        username: 'ujwal'
      }
     });
  }
}
