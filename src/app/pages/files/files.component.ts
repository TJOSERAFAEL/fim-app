import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../core/services/files.service';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.sass']
})
export class FilesComponent implements OnInit {

  files : any = [];

  constructor(private filesService : FilesService) { }

  ngOnInit() {
    this.filesService.getFiles().subscribe(data => 
      { 
        this.files = data; 
      });
  }

}
