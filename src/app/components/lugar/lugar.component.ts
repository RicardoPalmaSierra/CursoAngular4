import { Component, OnInit } from '@angular/core';
import { LugaresServices } from 'src/app/services/lugares/lugares.services';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  lat: number = 10.9059769;
  lng: number = -74.7863697;

  lugares =  null;

  constructor(private lugaresServices: LugaresServices) { 
    this.lugares = lugaresServices.getLugares();
  }

  ngOnInit() {

  }
  

}
