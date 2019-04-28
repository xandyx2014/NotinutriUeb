export interface RespuestaVacunasPaciente {
  ok: boolean;
  data: Vacuna[];
  message?: string;
}

export interface Vacuna {
  id: number;
  nombre: string;
  cura: string;
  detalle: string;
  cantidad: number;
  createdAt: string;
  updatedAt: string;
  Inyeccions: Inyeccion[];
}

export interface Inyeccion {
  id: number;
  fecha_inyectada: string;
  fecha_sgte: string;
  vacuna_id: number;
  refuerzo_id: number;
  doctor_id: number;
  paciente_id: number;
  createdAt: string;
  updatedAt: string;
}
