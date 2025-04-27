// login.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {
  username = '';  
  password = '';
  errorMessage = '';  

  constructor(private authService: AuthService, private router: Router) {}

  async onLogin() {
    try {
      const success = await this.authService.login(this.username, this.password);
      if (success) {
        this.router.navigate(['/home/dashboard']); 
      } else {
        this.errorMessage = 'Invalid username or password';
      }
    } catch (error) {
      this.errorMessage = 'Login failed. Please try again.';
    }
  }
}