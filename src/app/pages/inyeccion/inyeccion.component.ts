import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/interface/usuarioLogin.interface';
import { Vacuna } from 'src/app/interface/VacunasPacientes.interface';
import { VacunaService } from 'src/app/services/vacuna.service';
import { Paciente } from 'src/app/interface/paciente.interface';
import { PacientesService } from 'src/app/services/pacientes.service';
import { RefuerzoService } from 'src/app/services/refuerzo.service';
import { Refuerzo } from 'src/app/interface/refuerzo.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as datefn from 'date-fns';
import Swal from 'sweetalert2';
import { InyeccionService } from 'src/app/services/inyeccion.service';
@Component({
  selector: 'app-inyeccion',
  templateUrl: './inyeccion.component.html',
  styleUrls: ['./inyeccion.component.css']
})
export class InyeccionComponent implements OnInit, OnDestroy {
  activatedSubscription = new Subscription();
  vacunaSubscription = new Subscription();
  pacienteSubscription = new Subscription();
  refuerzoSubscription = new Subscription();
  idPaciente = 0;
  doctor: Usuario = {};
  vacunas: Vacuna[] = [];
  refuerzos: Refuerzo[] = [];
  paciente: Paciente;
  myForm: FormGroup;
  startDate =  new Date();
  constructor(private loginServie: LoginService,
              private vacunaService: VacunaService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private pacienteService: PacientesService,
              private refuerzoService: RefuerzoService,
              private inyeccionService: InyeccionService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.activatedSubscription = this.activatedRoute.params.subscribe(({id}) => {
      this.idPaciente = id;
      this.doctor = this.loginServie.usuarioLogueado();
      this.obtenerVacuna();
      this.obtenerRefuerzo();
      this.crearFormulario();
    });
  }
  obtenerVacuna() {
    this.vacunaSubscription = this.vacunaService.showVacuna().subscribe( resp => {
      this.vacunas = resp.data;
      this.obtenerPaciente(this.idPaciente);
    });
  }
  ngOnDestroy() {
    this.vacunaSubscription.unsubscribe();
    this.activatedSubscription.unsubscribe();
    this.pacienteSubscription.unsubscribe();
    this.refuerzoSubscription.unsubscribe();
  }
  obtenerPaciente(id) {
    this.pacienteSubscription = this.pacienteService.indexPaciente(id).subscribe( (resp: any) => {
      this.paciente = resp.data;
    });
  }
  obtenerRefuerzo() {
    this.refuerzoSubscription = this.refuerzoService.showRefuerzo()
      .subscribe( resp => {
        this.refuerzos = resp.data;
      });
  }

  crearFormulario() {
    this.myForm = this.fb.group({
      fecha_inyectada: [new Date(), Validators.required],
      fecha_sgte: ['', Validators.required],
      vacuna_id: ['', Validators.required],
      refuerzo_id: ['', Validators.required],
      paciente_id: [ this.idPaciente, Validators.required],
      doctor_id: [this.doctor.id, Validators.required],
    });
  }

  crearInyeccion() {
    this.inyeccionService.storeInyeccion({
      ...this.myForm.value,
      fecha_inyectada: datefn.format(this.myForm.value.fecha_inyectada, 'YYYY/MM/DD'),
      fecha_sgte: datefn.format(this.myForm.value.fecha_sgte, 'YYYY/MM/DD'),
    }).subscribe( resp => {
      if (resp.ok) {
        this.router.navigate(['/pages/pacientes']);
        Swal.fire({
          title: 'Creado exitosamente',
          text: 'Inyeccion creada'
        });
      }
    });
  }

}
