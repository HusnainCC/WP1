import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface AuthRequest {
  username: string;
  password: string;
}

export interface AuthResponse {
  token: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = 'https://localhost:7293/api/Auth';

  constructor(private http: HttpClient) {}

  // Login
  login(request: AuthRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, request);
  }

  // Sign up
  signup(request: AuthRequest): Observable<any> {
    return this.http.post(`${this.baseUrl}/signup`, request, { responseType: 'text' });
  }
}
