import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoginService } from 'src/app/core/services/login.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegistrationCompleteComponent } from 'src/app/shared/components/registration-complete/registration-complete.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  error: string;
  email: string;
  password: string;
  //name: string;
  surname: string;
  repeatPassword: string;
  formLogin: FormGroup;
  formRegister: FormGroup;
  showProgressBar: boolean = false;
  register: boolean = false;
  
  constructor(private formBuilder: FormBuilder,
              private loginService : LoginService,
              private router: Router,
              public dialog: MatDialog) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      email: [this.email, [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: [this.password, [Validators.required]]
    });

    this.formRegister = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      surname: [this.surname, [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      email: [this.email, [Validators.required, Validators.minLength(5), Validators.maxLength(220), Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      password: [this.password, [Validators.required, Validators.minLength(8), Validators.maxLength(60)]],
      repeatPassword: [this.repeatPassword, [Validators.required, Validators.minLength(8), Validators.maxLength(60)]]
    });
  }

  doLogin() {
    this.error = "";

    if (this.formLogin.valid) {

      this.setProgressBar(true);

      const email = this.formLogin.get('email').value;
      const password = this.formLogin.get('password').value;

      setTimeout( () => {
        this.loginService.getLogin(email, password).subscribe(
          (res: any) => { 
            localStorage.setItem("token", res.token); 
            this.router.navigate(['/users'])
          },
          err => { 
            this.error = "Usuario o contraseña incorrectos";
            this.setProgressBar(false);
          }
        );
      },1500);
    }
  }

  doRegister() {
    this.error = "";

    if (this.formRegister.valid) {

      this.setProgressBar(true);

      const name = this.formRegister.get('name').value;
      const surname = this.formRegister.get('surname').value;
      const email = this.formRegister.get('email').value;
      const password = this.formRegister.get('password').value;
      const confirmation = this.formRegister.get('repeatPassword').value;
      

      setTimeout( () => {
        this.loginService.register(name, surname, email, password, confirmation).subscribe(
          (res: any) => { 
            if (res.data == 'ok') {
              this.setProgressBar(false);
              this.openRegistrationDialog();
              this.showRegister();
              this.formRegister.reset();
            }
          },
          err => { 
            this.error = "El usuario ya existe";
            this.setProgressBar(false);
          }
        );
      },1500);
    }
  }

  openRegistrationDialog() {
    let dialogRef = this.dialog.open(RegistrationCompleteComponent, { width: '540px', disableClose: false });
  }

  setProgressBar(visible: boolean) {
    this.showProgressBar = visible;
  }

  showRegister() {
    this.register = !this.register;
  }

}