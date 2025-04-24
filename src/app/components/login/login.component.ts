import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LoggerService } from '../../services/logger.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Add this import

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule] // Add CommonModule here
})
export class LoginComponent {
  password = '';
  email = '';
  showEmailError = false;
  showPasswordError = false;

  constructor(private loggerService: LoggerService, private router: Router) {}

  onLogin() {
    if (this.loggerService.login(this.email, this.password)) {
      this.router.navigate(['/home']); 
    } else {
      this.showEmailError = true;
      this.showPasswordError = true;
    }
  }
}