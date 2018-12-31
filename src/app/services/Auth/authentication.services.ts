import { Injectable } from "@angular/core";
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationServices{

  constructor(
    private angularAuth: AngularFireAuth
  ){
    this.isLogged()
  }

  public login = (email, password) => {
    
    this.angularAuth.auth.signInWithEmailAndPassword(email, password)
      .then((response) =>{
        alert("Usuario Logueado Exitosamente")
        // console.log(response)
      })
      .catch((err)=>{
        alert("Ocurrio un error")
        // console.log(err)
    })
  }

  public registro = (email, password) => {
    console.log('Registrado')
    this.angularAuth.auth.createUserWithEmailAndPassword(email, password)
      .then((response) =>{
        alert("Usuario registrado con existo")
        // console.log(response)
      })
      .catch((err)=>{
        alert("Ocurrio un error")
        // console.log(err)
      })
  }

  public isLogged(){
    return this.angularAuth.authState;
  }

  public singOut(){
    this.angularAuth.auth.signOut();
  }
}