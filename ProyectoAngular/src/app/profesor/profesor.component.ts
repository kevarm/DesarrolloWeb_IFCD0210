import { Component, OnInit } from '@angular/core';
import { profesorBD } from '../Modelos/profesores';

@Component({
  selector: 'app-profesor',
  templateUrl: './profesor.component.html',
  styleUrls: ['./profesor.component.css']
})
export class ProfesorComponent implements OnInit{
  public profesorAll: Array <profesorBD>

  constructor(){
  this.profesorAll=[
    new profesorBD("Manolo", "González", "manolo@gmail.com", "Desarrollo Web", "Doble grado ADE/Informática")
  ]}

  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.profesorAll)
}
}
