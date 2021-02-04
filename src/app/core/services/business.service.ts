import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BusinessInterface } from '../interfaces/business';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  constructor(private http: HttpClient) { }

  getBusiness(offset: number) { 
    return this.http.get<BusinessInterface[]>(environment.api + "business/" + offset);
  }

  getBusinessByName(offset:number, name: string) {
    return this.http.get<BusinessInterface[]>(environment.api + "business/" + offset + "/" + name);
  }

  addNewBusiness(name: string, email: string, cif: string, direction: string, phone: string, postal_code: string, city: string) {
    return this.http.post(environment.api + "business",
    { 
      name: name,
      email: email,
      cif: cif,
      direction: direction,
      phone: phone,
      postal_code: postal_code,
      city: city
    });
  }

  deleteBusiness(id: string) {
    return this.http.delete(environment.api + "business/" + id);
  }

  getFilesByPath(path : string, regex : boolean) {
    return this.http.get<BusinessInterface[]>(environment.api + "files", 
    { 
      params: {
        path: path,
        regex: String(regex)
      } 
    });
  }
}
