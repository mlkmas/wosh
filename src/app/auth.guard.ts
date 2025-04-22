import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggerService } from './services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {  
  constructor(private loggerService: LoggerService, private router: Router) {}

  canActivate(): boolean {
    if (!this.loggerService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
