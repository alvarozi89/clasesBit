import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { InicioComponent } from './componente/inicio/inicio.component';
import { PaginaNoAutorizadaComponent } from './componente/pagina-no-autorizada/pagina-no-autorizada.component';
import { JefesCrearComponent } from './componente/jefes/jefes-crear/jefes-crear.component';
import { EmpleadosIndexComponent } from './componente/empleados/empleados-index/empleados-index.component';
import { EmpleadosCrearComponent } from './componente/empleados/empleados-crear/empleados-crear.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'inicio',component:InicioComponent},
  {path:'no-autorizado',component:PaginaNoAutorizadaComponent},
  {path:'jefe-crear',component:JefesCrearComponent},
  {path:'empleado-index',component:EmpleadosIndexComponent},
  {path:'empleado-crear',component:EmpleadosCrearComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
