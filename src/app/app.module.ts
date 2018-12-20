import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


export const firebaseConfig = {
  apiKey: "AIzaSyBQ-kbju_omiH0sl5nSoUsgTv9eD_MjYWc",
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
    CrearLugarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAamfHaxmfgBzSziQ5QU1D-KkcZUIQYbcM'
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [LugaresServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
