import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private paises:Paises[] = [
    {
      pais: "España"
    },
    {
      pais: "México"
    },
    {
      pais: "Estados Unidos"
    },
    {
      pais: "Brasil"
    },
    {
      pais: "Colombia"
    },
    {
      pais: "Portugal"
    },
    {
      pais: "Canada"
    },
    {
      pais: "Suiza",
    }

  ];

  constructor() { }
  
  getHabitaciones():Paises[]{
    return this.paises;
  }
}

export interface Paises{
  pais:string;

}