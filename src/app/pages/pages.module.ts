import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PrincipalComponent } from './principal/principal.component';
import { PacientesComponent } from './pacientes/pacientes.component';
import { MaterialModule } from '../material.module';
import { PacienteComponent } from './pacientes/paciente/paciente.component';
import { VacunasComponent } from './vacunas/vacunas.component';
import { InyeccionComponent } from './inyeccion/inyeccion.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from '../guards/auth.guard';
import { UsuarioComponent } from './usuario/usuario.component';
import { DateInyeccionPipe } from '../pipes/date-inyeccion.pipe';

@NgModule({
  declarations: [
    PrincipalComponent,
    PacientesComponent,
    PacienteComponent,
    VacunasComponent,
    InyeccionComponent,
    UsuarioComponent,
    DateInyeccionPipe
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard]
})
export class PagesModule { }
