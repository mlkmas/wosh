import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  login(email: string, password: string): boolean {
    if (email === 'admin@wosh.co.il' && password === 'admin@wosh') { 
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('isAuthenticated');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
