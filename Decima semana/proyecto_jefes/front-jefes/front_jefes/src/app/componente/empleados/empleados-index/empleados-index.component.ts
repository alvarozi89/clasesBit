import { Component, OnInit } from '@angular/core';
import { Empleado } from '../../models/empleado.models';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { JefeService } from 'src/app/servicios/jefe.service';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-empleados-index',
  templateUrl: './empleados-index.component.html',
  styleUrls: ['./empleados-index.component.css']
})
export class EmpleadosIndexComponent implements OnInit {

  //Variable auxiliares
  formaValue !:FormGroup
  public datos_empleados:any
  public id: any;
  public id_jefe:any;
  public filtro:any;
  public filtroText:any;
  public data_detalle:any;

  constructor
  (
    private formBuilder:FormBuilder,
    private jefeService:JefeService,
    private empleadoService:EmpleadoService,
    private router:Router

  )
  {this.id_jefe= this.jefeService.obtenerIdentidad();}

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.empleadoService.listarEmpleados()
    .subscribe(res=>{
      this.datos_empleados=res
      console.log(this.datos_empleados)
    })

  }

}
