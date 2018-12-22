import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class LugaresServices{
 

  constructor(private afDB: AngularFireDatabase, private http: HttpClient){
    
  }

  public getLugares(){
    return this.afDB.list('lugares')
  }

  public getLugar(id){
    
  }

  public guardarLugar(lugar){
    // console.log(lugar)
    this.afDB.database.ref("lugares/"+ lugar.id).set(lugar)
  }

  public obtenerGeoData(direccion){
    //http://maps.google.com/maps/api/geocode/json?address=9-55+calle+72,+Bogota,Colombia
    // https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY
    return this.http.get('https://maps.googleapis.com/maps/api/geocode/json?address='+ direccion + '&key=AIzaSyBbjnLPRHZ-nOJIupsE0VjRa4hVN_VxVtM')
    

  }
}
