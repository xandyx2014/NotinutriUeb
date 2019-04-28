export interface RespuestaRefuerzo {
  ok: boolean;
  data: Refuerzo[];
}

export interface Refuerzo {
  id: number;
  fecha: string;
  createdAt: string;
  updatedAt: string;
}
