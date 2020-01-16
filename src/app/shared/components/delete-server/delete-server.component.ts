import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServersService } from 'src/app/core/services/servers.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-delete-server',
  templateUrl: './delete-server.component.html',
  styleUrls: ['./delete-server.component.sass']
})
export class DeleteServerComponent implements OnInit {

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public serversService: ServersService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  closeDialog() {
    this.dialog.closeAll()
  }

  deleteServer(id: string) {
    console.log(id);
    this.serversService.deleteServer(id).subscribe(data => {
      if (data) {
        this.openSnackBar("Server deleted!");
        this.closeDialog();
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "CLOSE");
  }

}
