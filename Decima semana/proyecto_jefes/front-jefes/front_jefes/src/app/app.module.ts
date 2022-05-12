import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosCrearComponent } from './componente/empleados/empleados-crear/empleados-crear.component';
import { EmpleadosIndexComponent } from './componente/empleados/empleados-index/empleados-index.component';
import { JefesCrearComponent } from './componente/jefes/jefes-crear/jefes-crear.component';
import { JefesIndexComponent } from './componente/jefes/jefes-index/jefes-index.component';
import { LoginComponent } from './componente/login/login.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { PaginaNoAutorizadaComponent } from './componente/pagina-no-autorizada/pagina-no-autorizada.component';
import { BarraComponent } from './componente/barra/barra.component';
import { FooterComponent } from './componente/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadosCrearComponent,
    EmpleadosIndexComponent,
    JefesCrearComponent,
    JefesIndexComponent,
    LoginComponent,
    InicioComponent,
    PaginaNoAutorizadaComponent,
    BarraComponent,
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
