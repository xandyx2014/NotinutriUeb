import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { PacientesService } from 'src/app/services/pacientes.service';
import { Paciente } from 'src/app/interface/paciente.interface';
import { MatPaginator, MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',
  styleUrls: ['./pacientes.component.css']
})
export class PacientesComponent implements OnInit, OnDestroy {
  dataSubscription = new Subscription();
  pacienteSubscription = new Subscription();
  dataSource: MatTableDataSource<Paciente>;
  titulo = '';
  displayedColumns: string[] = ['id', 'nombre', 'ci', 'edad', 'telefono', 'correo', 'historial', 'consulta'];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private pacientesService: PacientesService) { }

  ngOnInit() {
    this.dataSubscription = this.activatedRoute.data.subscribe( ({titulo}: {titulo: string}) => {
      this.titulo = titulo;
    });
    this.pacienteSubscription = this.pacientesService.showPacientes().subscribe( resp => {
      this.crearTabla(resp.data);
    });
  }
  ngOnDestroy() {
    this.dataSubscription.unsubscribe();
    this.pacienteSubscription.unsubscribe();
  }
  crearTabla(pacientes: Paciente[]) {
    this.dataSource = new MatTableDataSource(pacientes);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  verPaciente({id}) {
    this.router.navigate(['/pages/pacientes', id]);
  }
  hacerConsulta({id}) {
    this.router.navigate(['/pages/inyeccion', id]);
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
