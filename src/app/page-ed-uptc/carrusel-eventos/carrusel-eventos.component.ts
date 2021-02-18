import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-carrusel-eventos',
  templateUrl: './carrusel-eventos.component.html',
  styleUrls: ['./carrusel-eventos.component.css']
})
export class CarruselEventosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $('.carousel').carousel();
  }

}
