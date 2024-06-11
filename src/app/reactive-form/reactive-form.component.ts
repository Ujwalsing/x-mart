import { Statement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import {
  Form,
  FormArray,
  FormControl,
  FormControlName,
  FormGroup,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  reactiveForm!: FormGroup;
  errors: {errorCondition: string, statement: string}[] ;

  ngOnInit() {
    this.reactiveForm = new FormGroup(
      {
        personalDetails: new FormGroup({
          username: new FormControl('', [
            Validators.required,
            this.noSpaceAllowed,
          ]),
          email: new FormControl('', [
            Validators.required,
            Validators.email,
            this.noSpaceAllowed,
          ], this.gmailCheck),
        }),
        password: new FormControl('', [
          Validators.required,
          this.notMoreThanFour,
        ]),
        confirmpassword: new FormControl('', Validators.required),
        country: new FormControl(''),
        gender: new FormControl(''),

        products: new FormArray([
          new FormControl('', Validators.required),
          new FormControl('', Validators.required),
        ]),
      },
      {
        validators: [this.comparePassword],
      }
    );


    this.errors = [
      {errorCondition: 'required', statement: 'Please enter the value'},
      {errorCondition: 'touched', statement: 'Please enter the touched value'},
      {errorCondition: 'mustMatch', statement: 'Confirm password must match to password'}
    ]
  
  this.reactiveForm.valueChanges.subscribe((value)=>{
     console.log(value);
     
  })

  this.reactiveForm.statusChanges.subscribe((value) => {
    console.log(value);
  })

  }
  onSubmit() {
    console.log(this.reactiveForm);
  }

  addProducts() {
    (<FormArray>this.reactiveForm.get('products')).push(new FormControl(null));
  }

  noSpaceAllowed(control: FormControl) {
    if (control.value != null && control.value.indexOf(' ') != -1) {
      return { noSpaceAllowed: true };
    } else {
      return null;
    }
  }

  notMoreThanFour(control: FormControl) {
    if (`${control.value}`.length >= 4) {
      return { moreThanFour: true };
    } else {
      return null;
    }
  }

  comparePassword(formGroup: FormGroup): ValidatorFn {
    const password = formGroup.get('password');
    const confirmpassword = formGroup.get('confirmpassword');

    if (confirmpassword.errors && !confirmpassword.errors.mustMatch) return;

    if (password.value !== confirmpassword.value) {
      confirmpassword.setErrors({ mustMatch: true });
    } else {
      confirmpassword.setErrors(null);
    }
  }

  gmailCheck(control: FormControl): Promise<any> | Observable<any>{
    const response = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(control.value === 'ujwalsinghs987@gmail.com'){
          resolve({cannotUseEmail : true});
        }else{
          return null;
        }
      }, 5000);
    });
    return response;
  }




 
}
