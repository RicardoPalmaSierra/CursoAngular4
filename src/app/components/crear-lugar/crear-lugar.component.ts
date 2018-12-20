import { Component, OnInit } from '@angular/core';
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
    this.lugaresServices.guardarLugar(this.lugar)
  }
}
