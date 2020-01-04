import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
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

  getFilesByPath(path : string) {
    return this.http.get<FileInterface[]>(environment.api + "files", 
    { 
      params: {
        path: path
      } 
    });
  }

}
