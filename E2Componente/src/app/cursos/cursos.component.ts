import { Component, OnInit } from '@angular/core';
import { cursosBD } from '../Modelos/cursos';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit{
  public cursosAll: Array<cursosBD>

  constructor(){
    this.cursosAll=[
      new cursosBD ("HTML", "Descubre el mundo del HTML", "Tema 1:Introducción"),
      new cursosBD ("CSS", "Descubre el mundo del CSS", "Tema 1:Introducción"),
      new cursosBD ("Javascript", "Descubre el mundo del JS", "Tema 1:Introducción")
    ]
  }
  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.cursosAll)
}
}
