import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Prueba1Component } from './componentes/prueba1/prueba1.component';
import { Prueba2Component } from './componentes/prueba2/prueba2.component';


@NgModule({
  declarations: [
    AppComponent,
    Prueba1Component,
    Prueba2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
