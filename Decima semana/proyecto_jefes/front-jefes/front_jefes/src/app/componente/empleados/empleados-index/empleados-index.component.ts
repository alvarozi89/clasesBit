import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleados-index',
  templateUrl: './empleados-index.component.html',
  styleUrls: ['./empleados-index.component.css']
})
export class EmpleadosIndexComponent implements OnInit {

  public data_detalle:any
  constructor() { }

  ngOnInit(): void {
  }

}
