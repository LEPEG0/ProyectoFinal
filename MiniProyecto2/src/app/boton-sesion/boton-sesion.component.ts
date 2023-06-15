import { Component, ElementRef, ViewChild } from "@angular/core";

@Component({
  selector: 'app-boton-sesion',
  templateUrl: './boton-sesion.component.html',
  styleUrls: ['./boton-sesion.component.css']
})

export class BotonSesionComponent {

  sesion: boolean = false;
  usuarios: Usuario[] = [];
  usuarioActual!: Usuario;
  sesionIniciada: boolean = false;
  error: boolean = false;
  exito: boolean = false;
  msj: string = "";
  continuar: boolean = false;
  txtBoton: string = "Bienvenido!";
  editarInfo: boolean = false;
  eliminar: boolean = false;
  txtModal: string = "";

  nombre: string = "";
  apellido: string = "";
  correo: string = "";
  telefono: string = "";
  contrasena: string = "";
  nacimiento: Date = new Date;

  constructor() {
    if (localStorage.getItem("usuarios") != null) {
      this.usuarios = JSON.parse(localStorage.getItem("usuarios") || "");
    }
    this.verificarSesion();
  }

  verificarSesion(): void {
    if (localStorage.getItem("usuarioActual") != null) {
      this.usuarioActual = JSON.parse(localStorage.getItem("usuarioActual") || "");
      this.sesionIniciada = true;
      this.txtBoton = "Hola " + this.usuarioActual.nombre + "!";
    } else {
      this.sesionIniciada = false;
    }
  }

  registrarUsuario(): void {
    let aux: Usuario = {
      nombre: this.nombre,
      apellido: this.apellido,
      correo: this.correo,
      telefono: this.telefono,
      contrasena: this.contrasena,
      nacimiento: this.nacimiento,
    }
    if (this.validarRegistro(aux)) {
      this.exito = true;
      this.msj = "Has sido registrado!"
      this.usuarioActual = aux;
      localStorage.setItem("usuarioActual", JSON.stringify(this.usuarioActual));
      this.usuarios.push(aux);
      localStorage.removeItem("usuarios");
      localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
      this.sesionIniciada = true;
      this.txtBoton = "Hola " + this.usuarioActual.nombre + "!";
    }
  }

  validarRegistro(usuario: Usuario): boolean {
    for (let i of this.usuarios) {
      if (i.correo == usuario.correo && i.telefono == usuario.telefono) {
        this.error = true;
        this.msj = "Correo y telefono ya siendo usados por un usuario.";
        return false;
      } else if (i.correo == usuario.correo) {
        this.error = true;
        this.msj = "Esta cuenta de correo ya esta siendo usada por un usuario.";
        return false;
      } else if (i.telefono == usuario.telefono) {
        this.error = true;
        this.msj = "Este numero de telefono ya esta siendo usado por un usuario.";
        return false;
      }
    }
    this.error = false;
    this.continuar = true;
    return true
  }

  limpiar(): void {
    this.nombre = "";
    this.apellido = "";
    this.correo = "";
    this.telefono = "";
    this.contrasena = "";
    this.nacimiento = new Date;
    this.error = false;
    this.exito = false;
    this.continuar = false;
    this.editarInfo = false;
    this.eliminar = false;
  }

  refrescar():void{ window.location.reload();}

  iniciarSesion(): void {
    var band = -1;
    for (let i of this.usuarios) {
      if (i.correo == this.correo) {
        if (this.contrasena == i.contrasena) {
          this.usuarioActual = i;
          localStorage.setItem("usuarioActual", JSON.stringify(this.usuarioActual));
          band = 1;
        } else {
          band = 0;
        }
        break;
      }
    }
    if (band == 0) {
      this.error = true;
      this.exito = false
      this.msj = "Contrasena incorrecta.";
    } else if (band == 1) {
      this.exito = true;
      this.error = false
      this.continuar = true;
      this.sesionIniciada = true;
      this.txtBoton = "Hola " + this.usuarioActual.nombre + "!";
      this.msj = "Has iniciado sesion!";
    } else if (band == -1) {
      this.error = true;
      this.exito = false;
      this.msj = "Nombre de usario no encontrado, intenta de nuevo.";

    }
  }

  cerrarSesion(): void {
    this.txtBoton = "Bienvenido!";
    this.usuarioActual.nombre = "";
    this.usuarioActual.apellido = "";
    this.usuarioActual.correo = "";
    this.usuarioActual.telefono = "";
    this.usuarioActual.contrasena = "";
    this.usuarioActual.nacimiento = new Date;
    localStorage.removeItem("usuarioActual");
    this.sesionIniciada = false;
    this.limpiar();
    this.refrescar();
  }

  editarInformacion(): void {
    this.editarInfo = true;
    this.nombre = this.usuarioActual.nombre;
    this.apellido = this.usuarioActual.apellido;
    this.correo = this.usuarioActual.correo;
    this.telefono = this.usuarioActual.telefono;
    this.contrasena = this.usuarioActual.contrasena;
    this.nacimiento = this.usuarioActual.nacimiento;
  }

  guardarModificacion(): void {
    if (this.nombre == this.usuarioActual.nombre &&
      this.apellido == this.usuarioActual.apellido &&
      this.correo == this.usuarioActual.correo &&
      this.telefono == this.usuarioActual.telefono &&
      this.contrasena == this.usuarioActual.contrasena &&
      this.nacimiento == this.usuarioActual.nacimiento) {
      this.error = true;
      this.msj = "Aun no has modificado nada.";
    } else {
      let aux: Usuario = {
        nombre: this.nombre,
        apellido: this.apellido,
        correo: this.correo,
        telefono: this.telefono,
        contrasena: this.contrasena,
        nacimiento: this.nacimiento,
      }
      let aux2: Usuario[] = [];
      for (let i of this.usuarios) {
        if (i.correo != this.usuarioActual.correo) {
          aux2.push(i);
        }
      }
      this.usuarios = aux2;
      if (this.validarRegistro(aux)) {
        localStorage.removeItem("usuarioActual");
        this.usuarioActual = aux;
        localStorage.setItem("usuarioActual", JSON.stringify(this.usuarioActual));
        this.usuarios.push(this.usuarioActual);
        localStorage.removeItem("usuarios");
        localStorage.setItem("usuarios", JSON.stringify(this.usuarios));
        this.continuar = true;
        this.exito = true;
        this.error = false;
        this.msj = "Tu informacion ha sido modificada correctamente.";
      }else{
        this.usuarios.push(this.usuarioActual);
      }
    }
  }

  eliminarUsuario():void{
    if(this.contrasena == this.usuarioActual.contrasena){
      let aux:Usuario[] = [];
      for(let i of this.usuarios){
        if(i.correo != this.usuarioActual.correo){
          aux.push(i);
        }
      }
      this.usuarios = aux;
      localStorage.removeItem("usuarios");
      localStorage.setItem("usuarios",JSON.stringify(this.usuarios));
      localStorage.removeItem("usuarioActual");
      this.exito = true;
      this.error = false;
      this.msj = "Tu cuenta ha sido eliminada correctamente!";
      this.continuar = true;
    }else{
      this.error = true;
      this.msj = "Contrasena incorrecta.";
    }
  }

}

interface Usuario {
  nombre: string,
  apellido: string,
  correo: string,
  telefono: string,
  contrasena: string,
  nacimiento: Date,
}

