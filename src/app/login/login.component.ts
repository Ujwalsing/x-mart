import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router){}

  onSubmit(): void {
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    // Add your login logic here
  }
  ngOnInit(): void{
       console.log("hehehehe");
    }
  login(){
    this.authService.login();
    this.router.navigate(['/Product']);
  }
}
