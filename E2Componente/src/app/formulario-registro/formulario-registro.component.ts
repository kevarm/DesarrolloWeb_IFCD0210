import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-formulario-registro',
  templateUrl: './formulario-registro.component.html',
  styleUrls: ['./formulario-registro.component.css']
})
export class FormularioRegistroComponent implements OnInit{
  public nombreReg: string
  public apellidosReg: string
  public emailReg: string
  public contrasenaReg: string

  constructor(){
    this.nombreReg=""
    this.apellidosReg=""
    this.emailReg=""
    this.contrasenaReg=""
  }

  submit(){
    console.log('Formulario enviado')
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
  }
}
