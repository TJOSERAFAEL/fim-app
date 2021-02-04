import { Component, OnInit, Output, EventEmitter, Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { VehicleService } from 'src/app/core/services/vehicle.service';

@Component({
  selector: 'app-add-vehicle',
  templateUrl: './add-vehicle.component.html',
  styleUrls: ['./add-vehicle.component.sass']
})
export class AddVehicleComponent implements OnInit {
  @Output() onAdd = new EventEmitter<any>(true);
  
  form: FormGroup;
  brand: number;
  model: string;
  initial_km: number;
  year: number;
  type: number;
  business: number;

  years: number[] = [];

  constructor(private formBuilder: FormBuilder, 
    public dialog: MatDialog, public vehicleService: VehicleService,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) data) { 
      this.business = data.business;
    }

  ngOnInit() {
    this.initYears();
    this.form = this.formBuilder.group({
      brand: [this.brand, [Validators.required]],
      model: [this.model, [Validators.required]],
      initial_km: [this.initial_km, [Validators.required]],
      year: [this.year, [Validators.required]],
      type: [this.type, [Validators.required]]
    });
  }

  addVehicle() {
    if (this.form.valid) {
      const brand = this.form.get('brand').value;
      const model = this.form.get('model').value;
      const initial_km = this.form.get('initial_km').value;
      const type = this.form.get('type').value;
      const year = this.form.get('year').value;

      this.vehicleService.addNewVehicle(brand, model, initial_km, year, type, this.business).subscribe(data => {
          if (data) {
            this.onAdd.emit(true);
            this.openSnackBar("¡Vehículo añadido!");
            this.closeDialog();
          }
        }
      );
    }
  }

  closeDialog() {
    this.dialog.closeAll()
  }

  initYears() {
    var initialYear = 1995;
    var currentYear = new Date().getFullYear();

    for(let i = initialYear; i <= currentYear; i++) {
      this.years.push(i);
    }

    console.log(this.years);
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, "Cerrar");
  }
}
