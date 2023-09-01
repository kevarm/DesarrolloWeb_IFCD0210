import { Component, OnInit } from '@angular/core';
import { alumnoBD } from '../Modelos/alumnos';
// import { alumnosBD } from '../Modelos/alumnos';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})


export class AlumnoComponent implements OnInit{
  public alumnoAll: Array<alumnoBD>
  // public alumnosAll: Array<alumnosBD>
    
  
  constructor(){
    this.alumnoAll =[
      new alumnoBD("Miguel", "Ramírez", 39, "miguel@gmail.com", 123456789, "./assets/media/fotommp.jpg", "HTML"),
      new alumnoBD("Javier", "Díaz", 19, "javier@gmail.com", 123456789, "./assets/media/fotommp.jpg", "CSS")
      ]
  }

  ngOnInit(){
    console.log("OnInit Ejecutado")
    console.log(this.alumnoAll)
  }
}
