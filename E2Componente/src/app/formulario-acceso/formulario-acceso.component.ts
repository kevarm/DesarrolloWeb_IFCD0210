import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-acceso',
  templateUrl: './formulario-acceso.component.html',
  styleUrls: ['./formulario-acceso.component.css']
})
  export class FormularioAccesoComponent implements OnInit{
    public correoAcc: string
    public contrasenaAcc: string
  
    constructor(){
      this.correoAcc=""
      this.contrasenaAcc=""
    }
  
    submit2(){
      console.log('Formulario enviado')
    }
    ngOnInit(){
      console.log("OnInit Ejecutado")
    }

}
