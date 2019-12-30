import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';


@Component({
  selector: 'app-add-server',
  templateUrl: './add-server.component.html',
  styleUrls: ['./add-server.component.sass']
})
export class AddServerComponent implements OnInit {
  serverForm: FormGroup;
  name: string;
  ipAddress: string;

  constructor(private formBuilder: FormBuilder, public dialog: MatDialog) { }

  ngOnInit() {
    this.serverForm = this.formBuilder.group({
      name: [this.name, [Validators.required, Validators.pattern('[a-zA-Z]+([a-zA-Z ]+)*')]],
      ip_address: [this.ipAddress, [Validators.required, Validators.pattern('(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)')]]
    });
  }

  closeDialog() {
    this.dialog.closeAll()
  }
}
