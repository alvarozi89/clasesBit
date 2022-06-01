import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';

import { ProductoIndexComponent } from './componente/producto/producto-index/producto-index.component';
import { ProductoRegistrarComponent } from './componente/producto/producto-registrar/producto-registrar.component';
import { ProductoEditarComponent } from './componente/producto/producto-editar/producto-editar.component';
import { UsuarioComponent } from './componente/usuario/usuario.component';
import { VentaCrearComponent } from './componente/venta/venta-crear/venta-crear.component';
import { VentaIndexComponent } from './componente/venta/venta-index/venta-index.component';
import { VentaDetalleComponent } from './componente/venta/venta-detalle/venta-detalle.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { CrearUsuarioComponent } from './componente/usuario/crear-usuario/crear-usuario.component';


const routes: Routes = [
  {path: '', component: LoginComponent },

  {path: 'producto-index',component: ProductoIndexComponent},
  {path: 'producto-registrar',component: ProductoRegistrarComponent},
  {path: 'producto-editar/:id',component: ProductoEditarComponent},
  {path: 'usuario',component: UsuarioComponent},

  {path: 'venta',component: VentaCrearComponent},
  {path: 'venta-index',component: VentaIndexComponent},
  {path: 'venta-detalle/:id',component: VentaDetalleComponent},
  {path: 'inicio',component: InicioComponent},
  {path: 'crear-usuario',component: CrearUsuarioComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
