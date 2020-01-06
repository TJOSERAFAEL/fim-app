import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ServersService } from 'src/app/core/services/servers.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.sass']
})
export class AddServerComponent implements OnInit {
  serverForm: FormGroup;
  name: string;
  ipAddress: string;

  constructor(private formBuilder: FormBuilder, 
    public dialog: MatDialog, public serversService: ServersService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.serverForm = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      ip_address: [this.ipAddress, [Validators.required, Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]]
    });
  }

  addServer() {
    console.log(this.serverForm.valid);
    if (this.serverForm.valid) {
      const name = this.serverForm.get('name').value;
      const ip_address = this.serverForm.get('ip_address').value;
      this.serversService.addNewServer(name, ip_address).subscribe(data => {
          if (data) {
            this.openSnackBar("Server added!");
            this.closeDialog();
          }
        }
      );
    }
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "CLOSE");
  }
}
