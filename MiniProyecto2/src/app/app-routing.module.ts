import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Airbnb1Component } from './airbnb1/airbnb1.component';
import { Airbnb2Component } from './airbnb2/airbnb2.component';
import { Airbnb3Component } from './airbnb3/airbnb3.component';
import { Airbnb4Component } from './airbnb4/airbnb4.component';
import { Airbnb5Component } from './airbnb5/airbnb5.component';
import { Airbnb6Component } from './airbnb6/airbnb6.component';
import { Airbnb7Component } from './airbnb7/airbnb7.component';
import { Airbnb8Component } from './airbnb8/airbnb8.component';
import { Airbnb9Component } from './airbnb9/airbnb9.component';
import { InicioComponent } from './inicio/inicio.component';
import { HeaderComponent } from './header/header.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { ContactoComponent } from './contacto/contacto.component';
import { BuscarDisponibilidadComponent } from './buscar-disponibilidad/buscar-disponibilidad.component';
import { AirbnbComponent } from './airbnb/airbnb.component';

const routes: Routes = [
  { path:"airbnb1",component:Airbnb1Component},
  { path:"airbnb2",component:Airbnb2Component},
  { path:"airbnb3",component:Airbnb3Component},
  { path:"airbnb4",component:Airbnb4Component},
  { path:"airbnb5",component:Airbnb5Component},
  { path:"airbnb6",component:Airbnb6Component},
  { path:"airbnb7",component:Airbnb7Component},
  { path:"airbnb8",component:Airbnb8Component},
  { path:"airbnb9",component:Airbnb9Component},
  { path:"",component:InicioComponent},
  { path:"header",component:HeaderComponent},
  { path:"ayuda",component:AyudaComponent},
  { path:"contacto",component:ContactoComponent},
  { path:"buscarDisponibilidad",component:BuscarDisponibilidadComponent},
  { path:"airbnb",component:AirbnbComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
