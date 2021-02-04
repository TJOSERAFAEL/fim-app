import { Component, OnInit, ViewChild } from '@angular/core';
import { BusinessService } from '../../core/services/business.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { MatChipInputEvent } from '@angular/material/chips';
import { AddBusinessComponent } from 'src/app/shared/components/add-business/add-business.component';
import { DeleteBusinessComponent } from 'src/app/shared/components/delete-business/delete-business.component';

export interface OS {
  name: string;
}

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.sass']
})
export class BusinessComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  operatingSystems: OS[] = [
    { name: 'Windows' },
    { name: 'MacOS' },
    { name: 'Ubuntu' },
    { name: 'CentOS' },
    { name: 'RedHat' },
    { name: 'Debian' },
    { name: 'Fedora' },
  ];

  business: any;
  showSpinner: boolean = true;
  fileRegex: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'email', 'cif', 'direction', 'phone', 'created_at','vehicles', 'activated', 'actions'];
  searchName: string;

  constructor(private businessService: BusinessService, public dialog: MatDialog) { }

  ngOnInit() {
    this.getBusiness();
  }

  getBusiness() {
    this.showSpinner = true;
    this.businessService.getBusiness(0).subscribe(data => {
      this.business = data.map(business => business)
      this.business = new MatTableDataSource(this.business);
      this.business.sort = this.sort;
      this.hideSpinner();
    }
    );
  }

  getBusinessByName() {
    this.showSpinner = true;
    this.businessService.getBusinessByName(0, this.searchName).subscribe(data => {
      this.business = data.map(business => business)
      this.business = new MatTableDataSource(this.business);
      this.business.sort = this.sort;
      this.hideSpinner();
    }
    );
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if ((value || '').trim()) {
      this.operatingSystems.push({ name: value.trim() });
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

  toggleFileRegex() {
    this.fileRegex = !this.fileRegex;
  }

  hideSpinner() {
    setTimeout(() => this.showSpinner = false, 1000);
  }

  openAddBusiness() {
    let dialogRef = this.dialog.open(AddBusinessComponent, { width: '640px', disableClose: false });
    dialogRef.componentInstance.onAdd.subscribe((data) => {
      if (data) {
        this.getBusiness();
      }
    });
    this.dialog.afterAllClosed.subscribe(() => {
      dialogRef.componentInstance.onAdd.unsubscribe();
    })
  }

  openDeleteBusiness(business: number) {
    let dialogRef = this.dialog.open(DeleteBusinessComponent, { width: '400px', disableClose: false, data: business});
    dialogRef.componentInstance.onDelete.subscribe((data) => {
      if (data) {
        this.getBusiness();
      }
    });
    this.dialog.afterAllClosed.subscribe(() => {
      dialogRef.componentInstance.onDelete.unsubscribe();
    })
  }

  openVehicules(business: number) {
    
  }
}
