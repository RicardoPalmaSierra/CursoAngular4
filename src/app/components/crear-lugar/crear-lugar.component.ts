import { Component, OnInit, HostBinding } from '@angular/core';
import { LugaresServices } from 'src/app/services/lugares/lugares.services';
import { trigger, state, style, transition, animate } from '@angular/animations'

@Component({
  selector: 'app-crear-lugar',
  templateUrl: './crear-lugar.component.html',
  styleUrls: ['./crear-lugar.component.css'],
  animations: [
    trigger('message', [
      state('inicial', style({
        display: 'none',
      })),
      state('final', style({
        display: 'block',
      })),
      transition('inicial => final', animate(1000)),
      transition('final => inicial', animate(8000)),
    ])
  ]
})
export class CrearLugarComponent implements OnInit {

  lugar:any = {}
  estadoMessage = 'inicial';

  constructor(private lugaresServices: LugaresServices) { }

  ngOnInit() {
  }

  animarMensaje(){
    this. estadoMessage = (this.estadoMessage == 'inicial') ? 'final' : 'inicial'
  }

  guardarLugar(){
    var direccion = this.lugar.address + ',' + this.lugar.city + ',' + this.lugar.country
    this.lugaresServices.obtenerGeoData(direccion).subscribe(geoData => { 
        this.lugar.lat = geoData[0].lat;
        this.lugar.lng = geoData[0].lon;
        this.lugar.id = Date.now();
        this.lugaresServices.guardarLugar(this.lugar)
        this.lugar = {};
      })
    
  }
}
