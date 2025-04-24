import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private isAuthenticated = false;

  constructor(private apiService: ApiService, private router: Router) {}

  login(email: string, password: string): Observable<boolean> {
    return this.apiService.login(email, password).pipe(
      tap(() => {
        this.isAuthenticated = true;
        this.router.navigate(['/home']);
      }),
      map(() => true),
      catchError((error) => {
        console.error('Login failed:', error);
        return of(false);
      })
    );
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}