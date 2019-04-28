import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../config/config';
import { RespuestaPaciente } from '../interface/paciente.interface';

@Injectable({
  providedIn: 'root'
})
export class PacientesService {
  url = config.url;
  constructor(private http: HttpClient) { }

  showPacientes() {
    return this.http.get<RespuestaPaciente>(`${this.url}/pacientes`);
  }
  indexPaciente(id) {
    return this.http.get(`${this.url}/pacientes/${id}`);
  }
}
