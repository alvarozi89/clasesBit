import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './componente/login/login.component';
import { DashboardComponent } from './componente/dashboard/dashboard.component';
import { ProductoIndexComponent } from './componente/producto/producto-index/producto-index.component';
import { BarraComponent } from './componente/barra/barra.component';
import { ProductoRegistrarComponent } from './componente/producto/producto-registrar/producto-registrar.component';
import { ProductoEditarComponent } from './componente/producto/producto-editar/producto-editar.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { VentaCrearComponent } from './componente/venta/venta-crear/venta-crear.component';
import { VentaIndexComponent } from './componente/venta/venta-index/venta-index.component';
import { VentaDetalleComponent } from './componente/venta/venta-detalle/venta-detalle.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CrearUsuarioComponent } from './componente/usuario/crear-usuario/crear-usuario.component';
import { PaginaNoAutorizadaComponent } from './componente/pagina-no-autorizada/pagina-no-autorizada.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProductoIndexComponent,
    BarraComponent,
    ProductoRegistrarComponent,
    ProductoEditarComponent,
    UsuarioComponent,
    VentaCrearComponent,
    VentaIndexComponent,
    VentaDetalleComponent,
    InicioComponent,
    CrearUsuarioComponent,
    PaginaNoAutorizadaComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
