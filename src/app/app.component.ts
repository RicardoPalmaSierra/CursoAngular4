import { Component } from '@angular/core';
import { AuthenticationServices } from './services/Auth/authentication.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'PlatziSquare';

  loggedIn = false;

  constructor(
    private AuthServices: AuthenticationServices
  ){
  this.loggedIn = false;
    this.AuthServices.isLogged()
      .subscribe((result)=>{
        // console.log(result);
        if(result && result.uid){
          this.loggedIn = true;          
        }else{
          this.loggedIn = false;
        }
      }), (error) => {
        this.loggedIn = false;
      }
  }

  cerrarSesion(){
    this.AuthServices.singOut();
    console.log(this.AuthServices.isLogged());
  }


}
