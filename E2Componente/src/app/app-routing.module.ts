import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';

const routes: Routes = [
  {path:'', 
  component:AppComponent},
  {path:'acceso',
  component: FormularioAccesoComponent},
  {path:'registro',
  component: FormularioRegistroComponent},
  {path:'contacto',
  component: FormularioContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
