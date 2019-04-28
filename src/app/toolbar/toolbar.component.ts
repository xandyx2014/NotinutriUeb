import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LoginService } from '../services/login.service';
import { Usuario } from '../interface/usuarioLogin.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  irPagina() {
    this.router.navigate(['/pages/usuario']);
  }

}
