import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServersService } from 'src/app/core/services/servers.service';

@Component({
  selector: 'app-delete-server',
  templateUrl: './delete-server.component.html',
  styleUrls: ['./delete-server.component.sass']
})
export class DeleteServerComponent implements OnInit {

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public serversService: ServersService) { }

  ngOnInit() {

  }

  closeDialog() {
    this.dialog.closeAll()
  }

  deleteServer(id: string) {
    console.log(id);
    this.serversService.deleteServer(id);
  }

}
