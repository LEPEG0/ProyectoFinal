import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Airbnb1Component } from './airbnb1/airbnb1.component';
import { Airbnb2Component } from './airbnb2/airbnb2.component';
import { Airbnb3Component } from './airbnb3/airbnb3.component';
import { Airbnb4Component } from './airbnb4/airbnb4.component';
import { Airbnb5Component } from './airbnb5/airbnb5.component';
import { Airbnb6Component } from './airbnb6/airbnb6.component';
import { Airbnb7Component } from './airbnb7/airbnb7.component';
import { Airbnb8Component } from './airbnb8/airbnb8.component';
import { Airbnb9Component } from './airbnb9/airbnb9.component';
import { BotonSesionComponent } from './boton-sesion/boton-sesion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { InicioComponent } from './inicio/inicio.component';
import { AyudaComponent } from './ayuda/ayuda.component';
import { BuscarComponent } from './buscar/buscar.component';
import { PaisesService } from './shared/paises.service';
import { BuscarDisponibilidadComponent } from './buscar-disponibilidad/buscar-disponibilidad.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AirbnbComponent } from './airbnb/airbnb.component';
import { VideoComponent } from './video/video.component';
import { DomseguroPipe } from './airbnb/domseguro.pipe';
import { FullCalendarModule } from '@fullcalendar/angular';


@NgModule({
  declarations: [
    AppComponent,
    Airbnb1Component,
    Airbnb2Component,
    Airbnb3Component,
    Airbnb4Component,
    Airbnb5Component,
    Airbnb6Component,
    Airbnb7Component,
    Airbnb8Component,
    Airbnb9Component,
    BotonSesionComponent,
    ContactoComponent,
    HeaderComponent,
    InicioComponent,
    AyudaComponent,
    ContactoComponent,
    BuscarComponent,
    BuscarDisponibilidadComponent,
    AirbnbComponent,
    VideoComponent,
    DomseguroPipe


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    FullCalendarModule,

  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
