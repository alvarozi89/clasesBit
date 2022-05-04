/*en esta parte vamos a importar los elementos necesarios para trabajar, eje; servicios, modelos,componentes para
el formulario funcione*/
import { Component, OnInit } from '@angular/core';


//esta parte es un decorador, podemos observar el nombre del componente,estilo, url
@Component({
  selector: 'app-prueba1',
  templateUrl: './prueba1.component.html',
  styleUrls: ['./prueba1.component.css']
})

//desde aqui ya empieza la parte logica
export class Prueba1Component implements OnInit {

//aqui vamos a declarar variables
public nombre ="Alvaro Santacruz";
public edad =13;

public pasaTiempo =["Leer","Jugar video juegos", "ver peliculas"]


  //este constructor luego lo vamos a trabajar
  constructor() { }

  //este es el primer encuentro con ts, lo que va aqui va iniciar en el proyecto
  ngOnInit(): void {

  }

//apartir de aqui podemos crear nuestras funciones

receso(){
  alert("Vayamos al receso y volvemos a las 8:25pm")

}

}
