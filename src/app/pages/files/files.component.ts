import { Component, OnInit } from '@angular/core';
import { FilesService } from '../../core/services/files.service';
import { Observable } from 'rxjs';
import { FileInterface } from 'src/app/core/interfaces/files';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
export interface OS {
  name: string;
}

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.sass']
})
export class FilesComponent implements OnInit {

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  operatingSystems: OS[] = [
    {name: 'Windows'},
    {name: 'MacOS'},
    {name: 'Ubuntu'},
    {name: 'CentOS'},
    {name: 'RedHat'},
    {name: 'Debian'},
    {name: 'Fedora'},
  ];

  files : Array<FileInterface>;
  showSpinner : boolean = true;

  constructor(private filesService : FilesService) { }

  ngOnInit() {
    this.filesService.getFiles().subscribe(data => {
        this.files = data.map(file => file)
        this.showSpinner = false;
      }
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.operatingSystems.push({name: value.trim()});
    }
    if (input) {
      input.value = '';
    }
  }

  remove(os: OS): void {
    const index = this.operatingSystems.indexOf(os);

    if (index >= 0) {
      this.operatingSystems.splice(index, 1);
    }
  }

  pinFile(event, file: FileInterface) {
    event.stopPropagation();
    event.preventDefault();
    file.pinned = !file.pinned;
  }

  searchFilesByPath(path : string) {
    this.showSpinner = true;
    this.filesService.getFilesByPath(path).subscribe(data =>  {
        this.files = data.map(file => file)
        setTimeout(() => this.showSpinner = false, 500);
      }
    );
  }
}
