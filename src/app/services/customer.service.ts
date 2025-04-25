// services/customer.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class CustomerService {
  private apiUrl = '/api/administrator/getAllCustomers';

  constructor(private http: HttpClient) { }

  getAllCustomers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}