import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Google Maps
import { AgmCoreModule } from '@agm/core';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { LugarComponent } from './components/lugar/lugar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { LugaresServices } from './services/lugares/lugares.services';
import { CrearLugarComponent } from './components/crear-lugar/crear-lugar.component';
import { HttpClientModule } from '@angular/common/http';
import { LinkifystrPipe } from './pipes/linkify.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { AuthenticationServices } from './services/Auth/authentication.services';
import { Guard } from './services/Guard/guard.services';


export const firebaseConfig = {
  apiKey: "AIzaSyBbjnLPRHZ-nOJIupsE0VjRa4hVN_VxVtM",
  authDomain: "curso-angular-4-fb03c.firebaseapp.com",
  databaseURL: "https://curso-angular-4-fb03c.firebaseio.com",
  storageBucket: "curso-angular-4-fb03c.appspot.com",
  messagingSenderId: "369082678286"
}

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    HomeComponent,
    LugarComponent,
    DetalleComponent,
    CrearLugarComponent,
    LinkifystrPipe,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbjnLPRHZ-nOJIupsE0VjRa4hVN_VxVtM'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule
  ],
  providers: [LugaresServices, AuthenticationServices, Guard],
  bootstrap: [AppComponent]
})
export class AppModule { }
