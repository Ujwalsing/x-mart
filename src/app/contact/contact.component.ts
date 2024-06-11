import { Component } from '@angular/core';
import { IDeactivateComponent } from '../candeactivate-guard.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements IDeactivateComponent{
  yourName;
  yourEmail;
  yourMessage;

  constructor(private router: Router){}

  onSubmit(contactForm: any) {
    if (contactForm.valid) {
      const formData = contactForm.value;
      console.log('Form Data: ', formData);
      alert('Thank you for your message!');
      contactForm.reset();
      this.router.navigate(['/Home'])
    }else{
      alert("Form is Invalid")
    }
  }
  alert(){
    alert("We will catch you up!");
  }

  canExit():boolean{
    if(this.yourName || this.yourEmail || this.yourMessage) return confirm("You have unsaved changes. Do you really want to discard these changes.");
    return true;
  }
}
