import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component'
import { LugarComponent } from './components/lugar/lugar.component';
import { DetalleComponent } from './components/detalle/detalle.component';
import { CrearLugarComponent } from './components/crear-lugar/crear-lugar.component';
import { LoginComponent } from './components/login/login.component';
import { RegistroComponent } from './components/registro/registro.component';
import { Guard } from './services/Guard/guard.services';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'lugares', component: LugarComponent },
  { path: 'detalle/:id', component:  DetalleComponent },
  { path: 'crear-lugar', component: CrearLugarComponent, canActivate: [Guard]},

  { path: 'login', component: LoginComponent },
  { path: 'registrar', component: RegistroComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
