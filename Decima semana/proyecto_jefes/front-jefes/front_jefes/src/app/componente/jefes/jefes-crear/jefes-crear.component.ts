import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Jefe } from '../../models/jefe.models';
import { JefeService } from 'src/app/servicios/jefe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jefes-crear',
  templateUrl: './jefes-crear.component.html',
  styleUrls: ['./jefes-crear.component.css']
})
export class JefesCrearComponent implements OnInit {

  //Variables auxiliares

  formValue!: FormGroup;
  jefeModel:Jefe= new Jefe();

  public mensaje_ok:any;
  public mensaje_error:any;


  constructor
  (
    private formBuilder:FormBuilder,
    private jefeService:JefeService,
    private router:Router
  )
  { }

  ngOnInit(): void {

    this.obtenerCampos();
  }

  obtenerCampos(){
    this.formValue = this.formBuilder.group({
      nombre:[''],
      correo:[''],
      contrasena: [''],
    })
  }


  CrearJefe(){

    this.jefeModel.nombre = this.formValue.value.nombre;
    this.jefeModel.correo = this.formValue.value.correo;
    this.jefeModel.contrasena = this.formValue.value.contrasena;

    if(this.jefeModel.nombre==""){
      this.mensaje_error="El campo nombre no puede estar vacio"
    }

    else if(this.jefeModel.correo==""){
      this.mensaje_error="El campo correo no puede estar vacio"
    }

    else if(this.jefeModel.contrasena==""){
      this.mensaje_error="El campo contraseña no puede estar vacio"
    }

    else{
      //Cuando salta acá ya esta alimentada la información
      this.jefeService.crear(this.jefeModel)
      .subscribe(res=>{
      console.log(res);
        if (res.mensaje=="El jefe ya existe") {
          this.mensaje_error=res.mensaje;
        }
        else{
          this.mensaje_ok="Se registro correctamente"
          alert("Se registro correctamente")
          this.router.navigate(['']);
        }
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
