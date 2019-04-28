import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Usuario } from 'src/app/interface/usuarioLogin.interface';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  myForm: FormGroup;
  usuario: Usuario;
  constructor(private fb: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.usuario = this.loginService.usuario;
    this.crearFormulario();
  }
  crearFormulario() {
    this.myForm = this.fb.group({
      nombre: [this.usuario.nombre, Validators.required],
      ci: [this.usuario.ci, Validators.required],
      edad: [this.usuario.edad, Validators.required],
      telefono: [this.usuario.telefono, Validators.required],
      correo: [this.usuario.correo, Validators.required],
      turno: [this.usuario.turno, Validators.required],
    });
  }
  actualizar() {
    this.loginService.updateUsuario({...this.myForm.value});
  }
  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}
