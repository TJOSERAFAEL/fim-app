import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileInterface } from '../interfaces/files';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }

  getFiles() { 
    return this.http.get<FileInterface[]>(environment.apiUrl + "files/files.json");
  }
}
