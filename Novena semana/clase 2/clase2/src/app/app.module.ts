import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { Prueba2Component } from './componentes/prueba2/prueba2.component';
import { ListadoConsolasComponent } from './componentes/listado-consolas/listado-consolas.component';
import { Prueba3Component } from './componentes/prueba3/prueba3.component';

import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    Prueba2Component,
    ListadoConsolasComponent,
    Prueba3Component
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
