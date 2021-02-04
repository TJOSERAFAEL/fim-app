import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-delete-vehicle',
  templateUrl: './delete-vehicle.component.html',
  styleUrls: ['./delete-vehicle.component.sass']
})
export class DeleteVehicleComponent implements OnInit {
  @Output() onDelete = new EventEmitter<any>(true);

  constructor(public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: string,
    public vehicleService: VehicleService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {

  }

  closeDialog() {
    this.dialog.closeAll()
  }

  deleteVehicle(id: string) {
    this.vehicleService.deleteVehicle(id).subscribe(data => {
      if (data) {
        this.openSnackBar("Vehículo eliminado!");
        this.onDelete.emit(true);
        this.closeDialog();
      }
    });
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Cerrar");
  }

}
