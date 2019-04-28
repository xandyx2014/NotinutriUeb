import { Injectable } from '@angular/core';
import { config } from '../config/config';
import { HttpClient } from '@angular/common/http';
import { RespuestaUsuarioLogin, Usuario } from '../interface/usuarioLogin.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url = config.url;
  islogin = false;
  usuario: Usuario = {};
  constructor(private http: HttpClient,
              private router: Router) { }

  login({usuario, password}: {usuario: string, password: string}) {
    this.http.post<RespuestaUsuarioLogin>(`${this.url}/usuarios/login?tipo=doctor`, { usuario, password} ).subscribe( resp => {
      this.islogin = resp.ok;
      this.usuario = resp.data;
      this.mostrarNotificacion(resp);
      this.guardarToken(resp);
      this.estaLogueado();
    });
  }
  mostrarNotificacion(resp) {
    if (!resp.ok) {
      Swal.fire({
        title: 'Usuario',
        text: resp.message
      });
    } else {
      this.rediccionar();
    }
  }
  rediccionar() {
    this.router.navigate(['/pages/pacientes']);
  }
  guardarToken(resp) {
    if (resp.ok) {
      localStorage.setItem('token', resp.token);
      localStorage.setItem('user', JSON.stringify(this.usuario));
    }
  }
  estaLogueado() {
    const token = JSON.stringify(localStorage.getItem('token'));
    const user = JSON.parse(localStorage.getItem('user'));
    if (token !== null) {
      if (token.length > 5 || user) {
        this.islogin = true;
        this.usuario = user;
      }
    }
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.islogin = false;
    this.usuario = {};
    this.router.navigate(['/']);
  }
  usuarioLogueado(): Usuario {
    if (Object.keys(this.usuario).length === 0) {
      this.usuario = JSON.parse(localStorage.getItem('user'));
      if (this.usuario === null || Object.keys(this.usuario).length === 0) {
        this.logout();
      }
    } else {
      return this.usuario;
    }
  }
  guardarUsuario(usuario: Usuario) {
    this.usuario = {...usuario};
    localStorage.setItem('user', JSON.stringify(this.usuario));
  }

  updateUsuario( usuario: Usuario) {
    this.http.put( `${this.url}/usuarios/${this.usuario.id}`, usuario).subscribe( (resp: any) => {
      if (resp.ok) {
        Swal.fire({
          title: 'Actualizado Corretactamente',
          text: `${this.usuario.nombre} se actualizo`
        });
        this.guardarUsuario(resp.data);
        this.router.navigate(['/pages/pacientes']);
      } else {
        Swal.fire({
          title: 'Ups ha Ocurrido un error',
          type: 'error'
        });
      }
    });
  }
  obtenerUsuario() {
    return this.usuario === {} ? this.usuario : JSON.parse(localStorage.getItem('user'));
  }
}
