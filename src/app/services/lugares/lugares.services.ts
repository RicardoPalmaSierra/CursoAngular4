import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()

export class LugaresServices{
  lugares: any =[
    { id: 1, name: 'Hotel Da prieto', description: 'Hotel 24 horas' , plan: 'Págo', estado: 'activo'},
    { id: 2, name: 'Hotel Estelar', description: 'Hotel ', plan: 'Gratis', estado: 'activo'},
    { id: 3, name: 'Colegio Antina', description: 'Enseñar es un arte', plan: 'Págo', estado: 'activo' },
    { id: 4, name: 'Otro colegio', description: 'Otra descripción', plan: 'Págo', estado: 'activo' }
  ]

  constructor(private afDB: AngularFireDatabase){

  }

  public getLugares(){
    return this.lugares;
  }

  public getLugar(id){
    return this.lugares.filter((lugar) => { 
      return lugar.id == id
    })[0] || null
  }

  public guardarLugar(lugar){
    // console.log("desde servicio", lugar)
    this.afDB.database.ref("lugares").push(lugar);
  }
}