import { Component, OnInit } from '@angular/core';
import { AuthenticationServices } from 'src/app/services/Auth/authentication.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any = {}

  constructor(
    private AuthServices: AuthenticationServices
  ) {

   }

  ngOnInit() {
    console.log(this.AuthServices.isLogged())
  }


  login(){
    this.AuthServices.login(this.user.email, this.user.password)
    setTimeout(() =>{
      console.log(this.AuthServices.isLogged());
    }, 5000)
  }



}
