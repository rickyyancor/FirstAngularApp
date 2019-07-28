import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PacientesComponent } from './admin/pacientes.component';
import { CitasComponent } from './admin/citas.component';
import { UsuariosComponent } from './admin/usuarios.component';
import { AuthGuard } from '../guards/auth-guard.service';
import { RoleGuard } from '../guards/role-guard.service';
export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: LayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'pacientes', component: PacientesComponent,canActivate: [RoleGuard],data: {role: 'Admin'}},
    { path: 'citas', component: CitasComponent,canActivate: [RoleGuard],data: {role: 'Admin'}},
  { path: 'usuarios', component: UsuariosComponent,canActivate: [RoleGuard],data: {role: 'Admin'}},
  { path: 'admin', component: AdminComponent,canActivate: [RoleGuard],data: {role: 'Admin'}},

    ]
  }
];
