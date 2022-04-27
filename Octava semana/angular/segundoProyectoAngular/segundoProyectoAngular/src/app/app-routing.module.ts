import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './componente/cards/cards.component';
import { CarruselComponent } from './componente/carrusel/carrusel.component';
import { Formulario1Component } from './componente/formulario1/formulario1.component';

const routes: Routes = [
  {path:'cards',component:CardsComponent},
  {path:'carrusel',component:CarruselComponent},
  {path:'formulario',component:Formulario1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
