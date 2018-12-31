import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';
import { AuthenticationServices } from '../Auth/authentication.services';

@Injectable()

export class Guard implements CanActivate{

  loggedIn = false

  constructor(private AuthServices: AuthenticationServices){
    this.AuthServices.isLogged()
      .subscribe((result)=>{
        if(result && result.uid){
          this.loggedIn = true;
        }else{
          this.loggedIn = false;
        }
      }, (err) => {
        this.loggedIn = false;
      })
  }

  canActivate(){
    return this.loggedIn
  }

}