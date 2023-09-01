import { Component, OnInit } from '@angular/core';
import { cursoBD } from '../Modelos/cursos';
@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  public cursoAll: Array<cursoBD>

  constructor(){
    this.cursoAll=[
      new cursoBD("HTML","Descubre el apasionante mundo del HTML","200 horas", "Tema 1:Introducción")
    ]}

  ngOnInit(){
      console.log("OnInit Ejecutado")
      console.log(this.cursoAll)
  }
  }