import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; /*Hay que importar esto siempre*/
import { AppComponent } from './app.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { TareasComponent } from './tareas/tareas.component';
import { FormularioDeConsultaComponent } from './formulario-de-consulta/formulario-de-consulta.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { TareasGestionComponent} from './tareas-gestion/tareas-gestion.component';

const routes: Routes = [
  {path:'gestion', 
  component:TareasGestionComponent},
  {path:'acceso', 
  component:FormularioAccesoComponent},
  {path:'consulta', 
  component: FormularioDeConsultaComponent},
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
  component: CursoComponent},
  {path: 'tareas',
  component: TareasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


