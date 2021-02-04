import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { VehicleStatsInterface } from '../interfaces/vehicleStats';
import { VehicleDrivingStyleInterface } from '../interfaces/vehicleDrivingStyle';
import { VehicleCoolantTemperatureInterface } from '../interfaces/vehicleCoolantTemperature';
import { VehicleStatsRawInterface } from '../interfaces/vehicleStatsRaw';

@Injectable({
  providedIn: 'root'
})
export class VehicleStatsService {

  constructor(private http: HttpClient) { }

  getVehicleStats(vehicle_id: number, type: string, start_date: string, end_date: string) { 
    return this.http.get<VehicleStatsInterface>(environment.api + "vehicle_stats/" + vehicle_id + "/" + type + "/" + start_date + "/" + end_date);
  }

  getVehicleStatsRaw(vehicle_id: number, type: string, start_date: string, end_date: string) { 
    return this.http.get<VehicleStatsRawInterface[]>(environment.api + "vehicle_stats_raw/" + vehicle_id + "/" + type + "/" + start_date + "/" + end_date);
  }

  getVehicleDrivingStyle(vehicle_id: number, type: string, start_date: string, end_date: string) { 
    return this.http.get<VehicleDrivingStyleInterface>(environment.api + "vehicle-driving-style/" + vehicle_id + "/" + type + "/" + start_date + "/" + end_date);
  }

  getCoolantTemperature(vehicle_id: number, type: string, start_date: string, end_date: string) { 
    return this.http.get<VehicleCoolantTemperatureInterface>(environment.api + "vehicle-coolant-temperature/" + vehicle_id + "/" + type + "/" + start_date + "/" + end_date);
  }

}
