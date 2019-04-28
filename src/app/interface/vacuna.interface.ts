import { Vacuna } from './VacunasPacientes.interface';

export interface RespuestaVacuna {
  ok: boolean;
  data: Vacuna[];
}

