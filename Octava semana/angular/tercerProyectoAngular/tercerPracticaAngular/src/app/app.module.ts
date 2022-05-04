import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraComponent } from './componente/barra/barra.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { XboxComponent } from './componente/xbox/xbox.component';
import { Ps5Component } from './componente/ps5/ps5.component';
import { NintentoComponent } from './componente/nintento/nintento.component';
import { FooterComponent } from './componente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraComponent,
    InicioComponent,
    XboxComponent,
    Ps5Component,
    NintentoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
