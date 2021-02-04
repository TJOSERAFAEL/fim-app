import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BusinessComponent } from './pages/business/business.component';
import { UsersComponent } from './pages/users/users.component';
import { IntegrationsComponent } from './pages/integrations/integrations.component';
import { AddBusinessComponent } from './shared/components/add-business/add-business.component';
import { AddVehicleComponent } from './shared/components/add-vehicle/add-vehicle.component';
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor';
import { BasicAuthInterceptor } from './core/interceptors/token.interceptor';
import { DeleteBusinessComponent } from './shared/components/delete-business/delete-business.component';
import { DeleteVehicleComponent } from './shared/components/delete-vehicle/delete-vehicle.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

import { JwtHelperService, JWT_OPTIONS  } from '@auth0/angular-jwt';
import { ChartsModule } from 'ng2-charts';
import { DoughnutChartComponent } from './shared/components/doughnut-chart/doughnut-chart.component';
import { RegistrationCompleteComponent } from './shared/components/registration-complete/registration-complete.component';

// import ngx-translate and the http loader
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { UserKycComponent } from './pages/user-kyc/user-kyc.component';
@NgModule({
  declarations: [
    AppComponent,
    BusinessComponent,
    UsersComponent,
    IntegrationsComponent,
    AddBusinessComponent,
    RegistrationCompleteComponent,
    AddVehicleComponent,
    DeleteBusinessComponent,
    DeleteVehicleComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent,
    DoughnutChartComponent,
    UserKycComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    // ngx-translate and the loader module
    HttpClientModule,
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddBusinessComponent, DeleteBusinessComponent, DeleteVehicleComponent, AddVehicleComponent, DoughnutChartComponent, RegistrationCompleteComponent]
})
export class AppModule { }

// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}