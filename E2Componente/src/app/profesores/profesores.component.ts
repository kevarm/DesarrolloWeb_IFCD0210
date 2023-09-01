import { Component , OnInit} from '@angular/core';
import { profesoresBD } from '../Modelos/profesores'

@Component({
  selector: 'app-profesores',
  templateUrl: './profesores.component.html',
  styleUrls: ['./profesores.component.css']
})
export class ProfesoresComponent implements OnInit{
  public ProfesoresAll: Array<profesoresBD>

  constructor(){
    this.ProfesoresAll=[
      new profesoresBD("Pepe", "Gallardo", "pepe@gmail.com", "Desarrollo Web / Ofimática", "Grado en Ingeniería Informática"),
      new profesoresBD("Antonio", "Pérez", "ap@gmail.com", "Ciberseguridad", "Licenciado en Informática"),
    ]}
    
    ngOnInit(){
      console.log("OnInit Ejecutado")
      console.log(this.ProfesoresAll)
  }
}
