import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { UsersInterface } from '../interfaces/users';
import { environment } from '../../../environments/environment';
import { UserKyc } from '../interfaces/userkyc';
import { UsersAdminInterface } from '../interfaces/usersAdmin';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUsers(offset: number, searchTerm: string = null, kycConfirmed: string = "-1", kycReady: string = "-1") { 

    var params: any = {};

    params.offset = offset;

    if (searchTerm) {
      params.search_term = searchTerm;
    }

    if (kycConfirmed != "-1") {
      params.kyc_confirmed = parseInt(kycConfirmed);
    }

    if (kycReady != "-1") {
      params.kyc_ready = parseInt(kycReady);
      console.log("ASDASD");
    }

    return this.http.post<UsersAdminInterface>(environment.api + "users", params);
  }

  getUserKyc(id_user: number) {
    return this.http.get<UserKyc>(environment.api + "user/kyc/" + id_user);
  }

  confirmKyc(id_user: number) {
    return this.http.get(environment.api +"user-confirm-kyc/" + id_user);
  }
}
