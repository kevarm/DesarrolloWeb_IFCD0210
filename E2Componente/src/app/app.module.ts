import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioRegistroComponent } from './formulario-registro/formulario-registro.component';
import { FormularioAccesoComponent } from './formulario-acceso/formulario-acceso.component';
import { FormularioContactoComponent } from './formulario-contacto/formulario-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioRegistroComponent,
    FormularioAccesoComponent,
    FormularioContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
