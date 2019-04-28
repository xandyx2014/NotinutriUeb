export interface RespuestaPaciente {
  ok: boolean;
  data: Paciente[];
}

export interface Paciente {
  id: number;
  nombre: string;
  ci: string;
  edad: string;
  telefono: string;
  correo: string;
  usuario_id: number;
  createdAt: string;
  updatedAt: string;
}
