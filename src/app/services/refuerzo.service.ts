import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { RespuestaRefuerzo } from '../interface/refuerzo.interface';


@Injectable({
  providedIn: 'root'
})
export class RefuerzoService {
  url = config.url;
  constructor(private http: HttpClient) { }
  showRefuerzo() {
    return this.http.get<RespuestaRefuerzo>(`${this.url}/refuerzos`);
  }
}
