import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Add this import
import { LoggerService } from '../../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule] // Add this line
})
export class LoginComponent {
  password = '';
  email = '';

  constructor(private loggerService: LoggerService, private router: Router) {}

  onLogin() {
    if (this.loggerService.login(this.email, this.password)) {
      this.router.navigate(['/home']); 
    } else {
      alert('Invalid credentials');
    }
  }
}