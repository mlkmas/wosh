import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = '/api';

  constructor(private http: HttpClient) {}

  // Auth methods
  login(username: string, password: string): Observable<any> {
    const params = new HttpParams()
      .set('username', username)
      .set('password', password);
    return this.http.get(`${this.baseUrl}/auth/login`, { params });
  }
  // Partner methods
  getPartners(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/partners`);
  }

  updatePartnerStatus(partnerId: string, isSuspended: boolean): Observable<string> {
    const params = new HttpParams()
      .set('partnerId', partnerId)
      .set('isSuspended', isSuspended.toString());
    return this.http.get<string>(`${this.baseUrl}/partners/status`, { params });
  }

  getPartnerDetails(partnerId: string): Observable<any> {
    const params = new HttpParams().set('partnerId', partnerId);
    return this.http.get<any>(`${this.baseUrl}/partners/details`, { params });
  }

  // Customer methods
  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/customers`);
  }

  updateCustomerStatus(customerId: string, isApproved: boolean): Observable<string> {
    const params = new HttpParams()
      .set('userId', customerId)
      .set('isApproved', isApproved.toString());
    return this.http.get<string>(`${this.baseUrl}/customers/status`, { params });
  }

  // Reservation methods
  getReservations(): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/reservations`);
  }

  // Dashboard methods
  getDashboardStats(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/dashboard/stats`);
  }
}