import { Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from '../../core/services/users.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatPaginator, PageEvent } from '@angular/material';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
import { UsersInterface } from 'src/app/core/interfaces/users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.sass']
})
export class UsersComponent implements OnInit {

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  users: any;
  total: number;
  showSpinner: boolean = true;
  fileRegex: boolean = false;
  displayedColumns: string[] = ['id', 'name', 'surname', 'email', 'created_at', 'kyc_confirmed', 'kyc_ready', 'actions'];
  searchName: string = null;

  filterKycConfirmed : string = "-1";
  filterKycReady: string = "-1";

  constructor(private usersService: UsersService, public dialog: MatDialog, private router: Router) { }

  ngOnInit() {
    this.getUsers(0);
  }

  getUsers(offset: number) {
    this.showSpinner = true;
    this.usersService.getUsers(offset, this.searchName, this.filterKycConfirmed, this.filterKycReady).subscribe(data => {
      this.users = data.users.map(users => users)
      this.users = new MatTableDataSource(this.users);
      this.users.sort = this.sort;
      this.total = data.total;
      this.hideSpinner();
    }
    );
  }
  
  hideSpinner() {
    setTimeout(() => this.showSpinner = false, 1000);
  }

  viewKyc(user: UsersInterface) {
    this.router.navigate(["/user-kyc/" + user.id], {
      state: { user: user }
    });
  }

  public getServerUsers(event?: PageEvent) {
    const offset = event.pageIndex * event.pageSize;
    this.getUsers(offset);
  }

}
