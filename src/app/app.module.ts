import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FilesComponent } from './pages/files/files.component';
import { IntegrationsComponent } from './pages/integrations/integrations.component';
import { ServersComponent } from './pages/servers/servers.component';
import { AddServerComponent } from './shared/components/add-server/add-server.component';
 
@NgModule({
  declarations: [
    AppComponent,
    FilesComponent,
    IntegrationsComponent,
    ServersComponent,
    AddServerComponent
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
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AddServerComponent]
})
export class AppModule { }
