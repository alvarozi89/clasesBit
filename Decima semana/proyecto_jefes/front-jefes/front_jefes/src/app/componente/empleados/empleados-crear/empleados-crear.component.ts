import { Component, OnInit } from '@angular/core';

import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Jefe } from '../../models/jefe.models';
import { JefeService } from 'src/app/servicios/jefe.service';
import { Empleado } from '../../models/empleado.models';
import { EmpleadoService } from 'src/app/servicios/empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-empleados-crear',
  templateUrl: './empleados-crear.component.html',
  styleUrls: ['./empleados-crear.component.css']
})
export class EmpleadosCrearComponent implements OnInit {

  public id_jefe:any;
  empleadoModel:Empleado = new Empleado();
  formValue !:FormGroup

  public mensaje_ok:any;
  public mensaje_error:any;

  constructor
   (
    private formBuilder:FormBuilder,
    private jefeService:JefeService,
    private empleadoService:EmpleadoService,
    private router:Router

    ) {this.id_jefe= this.jefeService.obtenerIdentidad(); }

  ngOnInit(): void {
    this.obtenerCampos()
  }

  obtenerCampos(){
    this.formValue= this.formBuilder.group({
      nombres:[''],
      apellidos:[''],
      cedula:[''],
      cargo:[''],
      correo:[''],
      tipoContrato:[''],
    })
  }


  CrearEmpleado(){

    this.empleadoModel.nombres = this.formValue.value.nombres;
    this.empleadoModel.apellidos = this.formValue.value.apellidos;
    this.empleadoModel.cedula = this.formValue.value.cedula;
    this.empleadoModel.cargo = this.formValue.value.cargo;
    this.empleadoModel.correo = this.formValue.value.correo;
    this.empleadoModel.tipoContrato = this.formValue.value.tipoContrato;

    this.empleadoModel.jefe = this.id_jefe;

    if(this.empleadoModel.nombres==""){
      this.mensaje_error="El campo nombre no puede estar vacio"
    }

    else{
      //Cuando salta acá ya esta alimentada la información
      this.empleadoService.CrearEmpleado(this.empleadoModel)
      .subscribe(res=>{
      console.log(res);
          this.mensaje_ok="Se registro correctamente"
          setTimeout(() => {
            this.router.navigate(['empleado-index']);
          }, 2000);
      },
      err=>{
        console.log(err)
      })
    }
  }
  cerrarAlerta(){
    this.mensaje_error=""
  }

}
