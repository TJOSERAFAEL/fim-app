import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServerInterface } from '../interfaces/servers';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServersService {

  constructor(private http: HttpClient) { }

  getServers() { 
    return this.http.get<ServerInterface[]>(environment.apiUrl + "servers/servers.json");
  }
}
