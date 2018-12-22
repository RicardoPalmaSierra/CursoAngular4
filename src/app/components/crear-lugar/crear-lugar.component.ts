import { Component, OnInit, HostBinding } from '@angular/core';
import { LugaresServices } from 'src/app/services/lugares/lugares.services';

@Component({
  selector: 'app-crear-lugar',
  templateUrl: './crear-lugar.component.html',
  styleUrls: ['./crear-lugar.component.css']
})
export class CrearLugarComponent implements OnInit {

  lugar:any = {}

  constructor(private lugaresServices: LugaresServices) { }

  ngOnInit() {
  }


  guardarLugar(){
    var direccion = this.lugar.address + ',' + this.lugar.city + ',' + this.lugar.country
    this.lugaresServices.obtenerGeoData(direccion).subscribe(geoData => { 
        console.log(geoData)
        this.lugar.lat = 0
        this.lugar.lng = 0
        this.lugar.id = Date.now();
        this.lugaresServices.guardarLugar(this.lugar)
        this.lugar = {};
      })
    
  }
}
