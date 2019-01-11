import { Component, OnInit } from '@angular/core';
import { LugaresServices } from 'src/app/services/lugares/lugares.services';
import { AuthenticationServices } from 'src/app/services/Auth/authentication.services';


@Component({
  selector: 'app-lugar',
  templateUrl: './lugar.component.html',
  styleUrls: ['./lugar.component.css']
})
export class LugarComponent implements OnInit {

  
  page: number = 1
  totalPages: number;
  numShops: number


  loggedIn = false;

  lugares =  null;

  constructor(private lugaresServices: LugaresServices, private AuthServices: AuthenticationServices) { 
    lugaresServices.getLugares().valueChanges().subscribe(lugares => {
      this.lugares = lugares
    })

    AuthServices.isLogged()
      .subscribe((result)=>{
        if(result && result.uid){
          this.loggedIn= true;
        }else{
          this.loggedIn = false;
        }
      },(err) => {
        console.log(err);
        this.loggedIn = false;
      })
  }

  ngOnInit() {

  }
  

}
