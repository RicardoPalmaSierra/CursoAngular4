import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresServices } from 'src/app/services/lugares/lugares.services';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  id: number = 0
  lugar: any;
  constructor(private data: ActivatedRoute, private lugaresServices: LugaresServices) {
    this.id = this.data.snapshot.params['id']
    this.lugar = lugaresServices.getLugar(this.id)
  }


  ngOnInit() {
  }

}
