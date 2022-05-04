import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  templateUrl: './pruebas.component.html',
  styleUrls: ['./pruebas.component.css']
})
export class PruebasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.primeraFuncion();
  }


  primeraFuncion(){
    alert("Buenas  noches, a descansar")
  }

}
