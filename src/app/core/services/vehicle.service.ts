import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { VehicleInterface } from '../interfaces/vehicle';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  constructor(private http: HttpClient) { }

  getVehicles(business_id: number, user_id: number, offset: number) { 
    if (business_id) {
      return this.http.get<VehicleInterface[]>(environment.api + "vehicle-by-business/" + business_id + "/" + offset);
    }

    return this.http.get<VehicleInterface[]>(environment.api + "vehicle-by-user/" + user_id + "/" + offset);
  }

  addNewVehicle(brand: number, model: string, initial_km: number, year: number, type: number, business_id: number) {
    return this.http.post(environment.api + "vehicle",
    { 
     brand: brand,
     model: model,
     initial_km: initial_km,
     year: year,
     type: type,
     business_id: business_id
    });
  }

  setActivated(id: number, activated: number) {
    return this.http.put(environment.api + "vehicle/activate", {
      id: id,
      activated: activated
    });
  }

  deleteVehicle(id: string) {
    return this.http.delete(environment.api + "vehicle/" + id);
  }
}
