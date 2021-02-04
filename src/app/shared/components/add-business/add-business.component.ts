import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BusinessService } from 'src/app/core/services/business.service';

@Component({
  selector: 'app-add-business',
  templateUrl: './add-business.component.html',
  styleUrls: ['./add-business.component.sass']
})
export class AddBusinessComponent implements OnInit {
  @Output() onAdd = new EventEmitter<any>(true);

  form: FormGroup;
  name: string;
  email: string;
  cif: string;
  direction: string;
  phone: string;
  postal_code: string;
  city: string;

  constructor(private formBuilder: FormBuilder, 
    public dialog: MatDialog, public businessService: BusinessService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: [this.name, [Validators.required]],
      email: [this.email, [Validators.required]],
      cif: [this.cif, [Validators.required]],
      direction: [this.direction, [Validators.required]],
      phone: [this.phone, [Validators.required]],
      postal_code: [this.postal_code, [Validators.required]],
      city: [this.city, [Validators.required]]
    });
  }

  addServer() {
    if (this.form.valid) {
      const name = this.form.get('name').value;
      const email = this.form.get('email').value;
      const cif = this.form.get('cif').value;
      const direction = this.form.get('direction').value;
      const phone = this.form.get('phone').value;
      const postal_code = this.form.get('postal_code').value;
      const city = this.form.get('city').value;

      this.businessService.addNewBusiness(name, email, cif, direction, phone, postal_code, city).subscribe(data => {
          if (data) {
            this.onAdd.emit(true);
            this.openSnackBar("¡Empresa añadida!");
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
    this.snackBar.open(message, "Cerrar");
  }
}
