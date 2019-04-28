import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, OnDestroy {
  subscription = new Subscription();
  titulo = '';
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
