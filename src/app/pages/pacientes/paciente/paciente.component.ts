import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { VacunaService } from 'src/app/services/vacuna.service';
import { Vacuna } from 'src/app/interface/VacunasPacientes.interface';

@Component({
  selector: 'app-paciente',
  templateUrl: './paciente.component.html',
  styleUrls: ['./paciente.component.css']
})
export class PacienteComponent implements OnInit, OnDestroy {
  activateRouteSubscription = new Subscription();
  vacunaServiceSubscription = new Subscription();
  paramsSubscription = new Subscription();
  vacunas: Vacuna[] = [];
  titulo = '';
  panelOpenState = false;
  constructor(private activatedRoute: ActivatedRoute,
              private vacunaService: VacunaService) { }

  ngOnInit() {
    this.activateRouteSubscription = this.activatedRoute.data.subscribe(( { titulo} ) => {
      this.titulo = titulo;
    });
    this.paramsSubscription =  this.activatedRoute.params.subscribe( ({id}) => {
      this.vacunaServiceSubscription = this.vacunaService.showVacunaPaciente(id).subscribe( resp => {
        this.vacunas = resp.data;
      });
    });
  }
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
    this.activateRouteSubscription.unsubscribe();
    this.vacunaServiceSubscription.unsubscribe();
  }

}
