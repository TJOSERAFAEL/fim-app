import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './pages/files/files.component';
import { IntegrationsComponent } from './pages/integrations/integrations.component';
import { ServersComponent } from './pages/servers/servers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

const routes: Routes = [
  { path: 'files', component: FilesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'integrations', component: IntegrationsComponent },
  { path: 'servers', component: ServersComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
