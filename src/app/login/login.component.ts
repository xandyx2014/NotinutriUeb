import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  myForm: FormGroup;
  constructor(private fb: FormBuilder,
              private loginService: LoginService) { }

  ngOnInit() {
    this.crearFormulario();
  }
  ngOnDestroy() {
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loguear() {
    this.loginService.login(this.myForm.value);
  }

}
