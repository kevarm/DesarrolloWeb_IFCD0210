import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProfesoresComponent } from './profesores/profesores.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { DragDropModule} from '@angular/cdk/drag-drop';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioDeRegistroComponent } from './formulario-de-registro/formulario-de-registro.component';
import { FormularioDeConsultaComponent } from './formulario-de-consulta/formulario-de-consulta.component';
import { TareasComponent } from './tareas/tareas.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import { TareasGestionComponent } from './tareas-gestion/tareas-gestion.component';

/*Aquí hay que enrutar todos los componentes (arriba)*/

@NgModule({
  declarations: [
    AppComponent,
    CursosComponent,
    CursoComponent,
    AlumnosComponent,
    AlumnoComponent,
    ProfesoresComponent,
    ProfesorComponent,
    FormularioAccesoComponent,
    FormularioDeRegistroComponent,
    FormularioDeConsultaComponent,
   
  ],
  imports: [
    TareasGestionComponent,
    MatInputModule,
    MatSelectModule,
    DragDropModule,
    TareasComponent,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
