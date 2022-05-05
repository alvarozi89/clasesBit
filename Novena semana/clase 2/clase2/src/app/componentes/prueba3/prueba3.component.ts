import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-prueba3',
  templateUrl: './prueba3.component.html',
  styleUrls: ['./prueba3.component.css']
})
export class Prueba3Component implements OnInit {

  num1!:number;
  num2!:number;
  resultado!:number;

  constructor() { }

  ngOnInit(): void {
  }

  suma(){
    this.resultado= this.num1 +this.num2
    }


}
