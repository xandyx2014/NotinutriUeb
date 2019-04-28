export interface RespuestaInyeccion {
  ok: boolean;
  data: InyeccionPaciente;
}

export interface InyeccionPaciente {
  id?: number;
  fecha_inyectada?: string;
  fecha_sgte?: string;
  doctor_id?: string;
  turno?: string;
  paciente_id?: string;
  vacuna_id?: string;
  refuerzo_id?: string;
  updatedAt?: string;
  createdAt?: string;
}
