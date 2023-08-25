import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; /*Hay que importar esto siempre*/
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';

const routes: Routes = [
  {path:'', component:
AppComponent},
  {path:'alumnos',
  component: AlumnosComponent},
  {path:'alumno',
  component: AlumnoComponent},
  {path:'profesor',
  component: ProfesorComponent},
  {path:'profesores',
  component: ProfesoresComponent},
  {path:'cursos',
  component: CursosComponent},
  {path:'curso',
  component: CursoComponent}
  {path:'profesor',
  component: ProfesorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


