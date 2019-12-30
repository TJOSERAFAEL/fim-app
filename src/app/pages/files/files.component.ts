import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../core/services/files.service';
import { Observable } from 'rxjs';
import { FileInterface } from 'src/app/core/interfaces/files';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.sass']
})
export class FilesComponent implements OnInit {

  files : Array<FileInterface>;

  constructor(private filesService : FilesService) { }

  ngOnInit() {
    this.filesService.getFiles().subscribe(data =>
        this.files = data.map(file => file)
      );
  }

}
