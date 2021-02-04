import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusinessService } from 'src/app/core/services/business.service';

@Component({
  selector: 'app-delete-business',
  templateUrl: './delete-business.component.html',
  styleUrls: ['./delete-business.component.sass']
})
export class DeleteBusinessComponent implements OnInit {
  @Output() onDelete = new EventEmitter<any>(true);

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public businessService: BusinessService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  closeDialog() {
    this.dialog.closeAll()
  }

  deleteBusiness(id: string) {
    this.businessService.deleteBusiness(id).subscribe(data => {
      if (data) {
        this.openSnackBar("¡Empresa eliminada!");
        this.onDelete.emit(true);
        this.closeDialog();
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Cerrar");
  }

}
