export interface RespuestaUsuarioLogin {
  ok: boolean;
  data: Usuario;
  token: string;
  message?: string;
}

export interface Usuario {
  id?: number;
  nombre?: string;
  ci?: string;
  edad?: string;
  telefono?: string;
  correo?: string;
  turno?: string;
  usuario_id?: number;
  createdAt?: string;
  updatedAt?: string;
}
