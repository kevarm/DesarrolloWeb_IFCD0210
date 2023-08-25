import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-contacto',
  templateUrl: './formulario-contacto.component.html',
  styleUrls: ['./formulario-contacto.component.css']
})
export class FormularioContactoComponent implements OnInit{
  public nombreCont: string
  public correoCont: string
  public mensajeCont: string

  constructor(){
    this.nombreCont=""
    this.correoCont=""
    this.mensajeCont=""
  }
  submit3(){
    console.log('Formulario enviado')
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
  }
}
