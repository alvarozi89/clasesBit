import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba2',
  templateUrl: './prueba2.component.html',
  styleUrls: ['./prueba2.component.css']
})
export class Prueba2Component implements OnInit {
  public titulo ="Componente 2";
  public nombrePrueba= "alvaro"
  public nombrePrueba2= "ALVARO"

  public consolas:any

  public consolas2=
  [
    {
    marca:"Xboaaax",
    anio: "2006aa",
    precio: 500
    },

    {
    marca:"ps4445",
    anio: "2004",
    precio: 600
    },
    {
    marca:"nintendo",
    anio: "2001",
    precio: 300
    }
  ];

  // public consolas =
  // [
  //   {
  //   marca:"Xbox",
  //   anio: "2006",
  //   precio: 500
  //   },

  //   {
  //   marca:"ps5",
  //   anio: "2004",
  //   precio: 600
  //   },
  //   {
  //   marca:"nintendo",
  //   anio: "2001",
  //   precio: 300
  //   }

  // ];

  public anioLanzamiento = new Date();
  public precio = 200;

  constructor() { }

  ngOnInit(): void {


    this.carga()
    this.listarTodasPersonas();

    //validar roles, permisos, token


  }

  carga(){
      setTimeout(() => {
        this.consolas =
        [
          {
          marca:"Xbox",
          anio: "2006",
          precio: 500
          },

          {
          marca:"ps5",
          anio: "2004",
          precio: 600
          },
          {
          marca:"nintendo",
          anio: "2001",
          precio: 300
          }
        ];
    }, 1000);
  }


  //esta funciones deben centrarse en enventos, como clic, change
  eliminarPersona(){

  }


  actualizarPersona(){

  }

  listarTodasPersonas(){

  }


}
