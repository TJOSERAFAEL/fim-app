import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getLogin(email: string, password: string) { 
    return this.http.post(environment.api + "login-admin", { 
      email: email,
      password: password
    });
  }

  register(name: string, surname: string, email: string, password: string, confirmation: string) { 
    return this.http.post(environment.api + "register", { 
      name: name,
      surname: surname,
      email: email,
      password: password,
      password_confirmation: confirmation
    });
  }
}
