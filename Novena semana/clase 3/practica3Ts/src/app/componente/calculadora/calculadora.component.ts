import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
//apartir de aqui declaramos las variables con las que vamos a trabajar
  titulo="Mi calculadora"
  num1!:number;
  num2!: number;
  resultado!:number;

  mensaje_ok:any;
  mensaje_error:any;

  constructor() { }

  ngOnInit(): void {

  }

  sumar(){

    if(this.num1==null){
      this.mensaje_error="Espera, te falta digitar el número 1"
    }

    else if(this.num2==null){
      this.mensaje_error="Espera, te falta digitar el número 2"
    }

    else {
      this.resultado= this.num1+this.num2
      this.mensaje_ok="La operación de la suma fue correcta"
    }
  }

}
