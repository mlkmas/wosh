// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const JWT_TOKEN_KEY = 'AUTH_TOKEN';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private loginUrl = `${environment.apiBaseUrl}/authorization/administrator/login`;
  public token: string | null = null;

  constructor(private http: HttpClient) {
    this.token = localStorage.getItem(JWT_TOKEN_KEY);
  }

  login(username: string, password: string): Promise<boolean> {
    return new Promise((resolve) => {
      this.http.post<{ token?: string }>(
        this.loginUrl,
        { username, password }
      ).subscribe({
        next: (res) => {
          if (res.token) {
            this.token = res.token;
            localStorage.setItem(JWT_TOKEN_KEY, res.token);
            resolve(true);
          } else {
            resolve(false);
          }
        },
        error: () => resolve(false)
      });
    });
  }

  logout(): void {
    this.token = null;
    localStorage.removeItem(JWT_TOKEN_KEY);
  }

  isAuthenticated(): boolean {
    return !!this.token;
  }

  // Add this method for the interceptor
  getToken(): string | null {
    return this.token;
  }
}