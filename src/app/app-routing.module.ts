import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FilesComponent } from './pages/files/files.component';
import { IntegrationsComponent } from './pages/integrations/integrations.component';

const routes: Routes = [
  { path: 'files', component: FilesComponent },
  { path: 'integrations', component: IntegrationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
