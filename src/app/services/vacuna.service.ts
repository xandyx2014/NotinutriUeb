import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { RespuestaVacunasPaciente } from '../interface/VacunasPacientes.interface';
import { RespuestaVacuna } from '../interface/vacuna.interface';

@Injectable({
  providedIn: 'root'
})
export class VacunaService {
  url = config.url;
  constructor(private http: HttpClient) { }

  showVacunaPaciente(id: string) {
    return this.http.get<RespuestaVacunasPaciente>(`${this.url}/inyeciones/${id}/vacunas`);
  }

  showVacuna() {
    return this.http.get<RespuestaVacuna>(`${this.url}/vacunas`);
  }
}
