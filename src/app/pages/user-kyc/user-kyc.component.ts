import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/core/services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UsersInterface } from 'src/app/core/interfaces/users';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-kyc',
  templateUrl: './user-kyc.component.html',
  styleUrls: ['./user-kyc.component.sass']
})
export class UserKycComponent implements OnInit {

  imagePath: string;
  user_id: number;
  kyc: any = null;
  user: any;

  constructor(private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router,
    private snackBar: MatSnackBar) { 
      this.user = this.router.getCurrentNavigation().extras.state.user;
    }

  ngOnInit() {
    this.user_id = this.route.snapshot.params.user_id ? this.route.snapshot.params.user_id : 0;
    this.imagePath = environment.server;
    this.getKyc();
  }

  getKyc() {
    this.usersService.getUserKyc(this.user_id).subscribe(data => {
      this.kyc = data[0];
    });
  }

  confirmKyc() {
    this.usersService.confirmKyc(this.user_id).subscribe((response: any) => {
      if (response.data == "kyc_confirmed") {
        this.openSnackBar("KYC Confirmed!", null);
      }
    });
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 4000,
    });
  }

}
