import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { PacienteComponent } from './pacientes/paciente/paciente.component';
import { VacunasComponent } from './vacunas/vacunas.component';
import { InyeccionComponent } from './inyeccion/inyeccion.component';
import { AuthGuard } from '../guards/auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  { path: '', component: PrincipalComponent,  data: { titulo: 'principal'} },
  { path: 'vacunas', component: VacunasComponent, canActivate: [AuthGuard]  , data: { titulo: 'principal'} },
  { path: 'pacientes', component: PacientesComponent, canActivate: [AuthGuard]  , data: { titulo: 'Pacientes'} },
  { path: 'pacientes/:id', component: PacienteComponent, canActivate: [AuthGuard]  , data: { titulo: 'Paciente'} },
  { path: 'inyeccion/:id', component: InyeccionComponent, canActivate: [AuthGuard] },
  { path: 'usuario', component: UsuarioComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
