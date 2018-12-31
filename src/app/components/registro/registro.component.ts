import { Component, OnInit } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';
import { AuthenticationServices } from 'src/app/services/Auth/authentication.services';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  user: any = {}

  constructor(
    private AuthServices: AuthenticationServices
  ) { }

  ngOnInit() {
  }


  registrar(){
    if(this.user.email != null && this.user.password != null){
      this.AuthServices.registro(this.user.email, this.user.password)
    }else{
      alert("Faltan campos");
    }
  }

}
