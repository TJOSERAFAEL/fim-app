import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessComponent } from './pages/business/business.component';
import { UsersComponent } from './pages/users/users.component';
import { IntegrationsComponent } from './pages/integrations/integrations.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuardService as AuthGuard} from './core/services/auth-guard.service';
import { AuthService } from './core/services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { UserKycComponent } from './pages/user-kyc/user-kyc.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full'},
  { path: 'business', component: BusinessComponent, canActivate: [AuthGuard] },
  { path: 'users', component: UsersComponent, canActivate: [AuthGuard] },
  { path: 'user-kyc/:user_id', component: UserKycComponent, canActivate: [AuthGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'integrations', component: IntegrationsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, AuthService, JwtHelperService]
})
export class AppRoutingModule { }
