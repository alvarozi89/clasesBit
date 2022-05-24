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
  formValue !:FormGroup
  public datos_empleados:any
  public id: any;
  public id_jefe:any;
  public filtro:any;
  public filtroText:any;
  public data_detalle:any;
  public token:any;

  EmpleadoModel:Empleado = new Empleado();



  constructor(
    private formBuilder:FormBuilder,
    private jefeService:JefeService,
    private empleadoService:EmpleadoService,
    private router:Router

  )
  {
    this.id_jefe= this.jefeService.obtenerIdentidad();
    this.token= this.jefeService.obtenerToken();
  }

  ngOnInit(): void {
    this.validar();
    this.obtenerCampos();
  }

  validar(){
    if(this.token){

      this.listarEmpleadosPorJefe();
    }
    else{
      this.router.navigate(['no-autorizado'])
    }
  }

  listar(){
    this.empleadoService.listarEmpleados()
    .subscribe(res=>{
      this.datos_empleados=res
      console.log(this.datos_empleados)
    })

  }

  listarEmpleadosPorJefe(){
    this.empleadoService.obtenerEmpleadosDeUnJefe(this.id_jefe)
    .subscribe(res=>{
      this.datos_empleados=res
      console.log(this.datos_empleados)
    })

  }

  search(searchForm:any){
    this.empleadoService.buscarFiltro(this.id_jefe,searchForm.value.filtro)
    .subscribe(res=>{
      this.datos_empleados=res
      console.log(this.datos_empleados)
    })

    if(this.filtroText==""){
      this.listarEmpleadosPorJefe();
    }
  }


  obtenerId(item:any){
    this.EmpleadoModel._id = item._id
  }

  eliminarEmpleado(){
    this.empleadoService.eliminarEmpleado(this.EmpleadoModel._id)
    .subscribe(res=>{
      alert("Empleado eliminado "+this.EmpleadoModel._id)
      this.listarEmpleadosPorJefe()
    })
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

  editar(item:any){

    this.EmpleadoModel._id = item._id
    this.formValue.controls['nombres'].setValue(item.nombres)
    this.formValue.controls['apellidos'].setValue(item.apellidos)
    this.formValue.controls['cedula'].setValue(item.cedula)
    this.formValue.controls['correo'].setValue(item.correo)
    this.formValue.controls['cargo'].setValue(item.cargo)
    this.formValue.controls['tipoContrato'].setValue(item.tipoContrato)

  }



  actualizarEmpleado(){

    this.EmpleadoModel.nombres= this.formValue.value.nombres;
    this.EmpleadoModel.apellidos= this.formValue.value.apellidos;
    this.EmpleadoModel.cedula= this.formValue.value.cedula;
    this.EmpleadoModel.correo= this.formValue.value.correo;
    this.EmpleadoModel.cargo= this.formValue.value.cargo;
    this.EmpleadoModel.tipoContrato= this.formValue.value.tipoContrato;
    this.EmpleadoModel.jefe= this.id_jefe;

    this.empleadoService.actualizarEmpleado(this.EmpleadoModel._id,this.EmpleadoModel)
    .subscribe(res=>{
      alert("Persona actualizada")
      this.listarEmpleadosPorJefe()
    })


  }


}
