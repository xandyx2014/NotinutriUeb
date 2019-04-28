import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';
import { RespuestaInyeccion, InyeccionPaciente } from '../interface/inyeccion.interface';
@Injectable({
  providedIn: 'root'
})
export class InyeccionService {
  url = config.url;
  constructor(private http: HttpClient) { }

  storeInyeccion(data: InyeccionPaciente) {
    return this.http.post<RespuestaInyeccion>(`${this.url}/inyeciones`, data);
  }
}
