import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilesComponent } from './pages/files/files.component';
import { IntegrationsComponent } from './pages/integrations/integrations.component';
import { ServersComponent } from './pages/servers/servers.component';
import { AddServerComponent } from './shared/components/add-server/add-server.component';
import { HttpErrorInterceptor } from './core/interceptors/http-error-interceptor';
import { DeleteServerComponent } from './shared/components/delete-server/delete-server.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    IntegrationsComponent,
    ServersComponent,
    AddServerComponent,
    DeleteServerComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddServerComponent, DeleteServerComponent]
})
export class AppModule { }
