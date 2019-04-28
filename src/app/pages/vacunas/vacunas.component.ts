import { Component, OnInit, OnDestroy } from '@angular/core';
import { VacunaService } from 'src/app/services/vacuna.service';
import { Subscription } from 'rxjs';
import { Vacuna } from 'src/app/interface/VacunasPacientes.interface';

@Component({
  selector: 'app-vacunas',
  templateUrl: './vacunas.component.html',
  styleUrls: ['./vacunas.component.css']
})
export class VacunasComponent implements OnInit, OnDestroy {
  vacunaSubscrition = new Subscription();
  vacunas: Vacuna[] = [];
  constructor(private vacunaService: VacunaService) { }

  ngOnInit() {
    this.vacunaSubscrition =  this.vacunaService.showVacuna().subscribe( resp => {
      this.vacunas = resp.data;
    });
  }
  ngOnDestroy() {
    this.vacunaSubscrition.unsubscribe();
  }

}
