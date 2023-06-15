import { Component } from '@angular/core';
import { PaisesService,Paises } from '../shared/paises.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent {

  paises:Paises[];
  index:number=-1;
  datos!:Paises;
  mensaje:string="";
  

  constructor(public servicio: PaisesService){
    this.paises=this.servicio.getHabitaciones();
    console.log(this.paises);

  }

  ver(aux:string){
    console.log("Estoy en el metodo ver"+aux);
    this.index=this.paises.findIndex(p=>p.pais===aux);
    console.log(this.index);
    if(this.index!==-1){
      this.datos=this.paises[this.index];
    }
    else{
      this.mensaje="Por el momento no contamos con reservaciones en ese pais, esperamos proximamente ofrecerte ese servicio de la mejor manera"; 
      console.log(this.mensaje);
      setTimeout(()=>{
        this.mensaje="";
      },2000);
    }
  }

  ngOnInit():void{

  }

}

