import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  {path:'', 
  component:AppComponent},
  {path:'acceso',
  component: FormularioAccesoComponent},
  {path:'registro',
  component: FormularioRegistroComponent},
  {path:'contacto',
  component: FormularioContactoComponent},
  {path:'alumno',
  component: AlumnoComponent},
  {path:'alumnos',
  component: AlumnosComponent},
  {path:'profesor',
  component: ProfesorComponent},
  {path:'profesores',
  component: ProfesoresComponent},
  {path:'curso',
  component: CursoComponent},
  {path:'cursos',
  component: CursosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
