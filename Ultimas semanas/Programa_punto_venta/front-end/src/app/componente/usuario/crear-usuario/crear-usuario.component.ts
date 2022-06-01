import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user.model';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

 //Variables auxiliares

 formValue!: FormGroup;
 userModel:User= new User();

 public rol =["ADMIN","EMPLEADO","USUARIO"]

 public mensaje_ok:any;
 public mensaje_error:any;


  constructor
  (
    private formBuilder:FormBuilder,
    private usuarioService:UsuarioService,
    private router:Router
  )
  { }

  ngOnInit(): void {
    this.obtenerCampos();
  }

  obtenerCampos(){
    this.formValue = this.formBuilder.group({
      nombres:[''],
      apellidos:[''],
      correo: [''],
      rol: [''],
      contrasena: [''],
    })
  }

  CrearUsuario(){

    this.userModel.nombres = this.formValue.value.nombres;
    this.userModel.apellidos = this.formValue.value.apellidos;
    this.userModel.correo = this.formValue.value.correo;
    this.userModel.rol = this.formValue.value.rol;
    this.userModel.contrasena = this.formValue.value.contrasena;


    if(this.userModel.nombres==""){
      this.mensaje_error="El campo nombre no puede estar vacio"
    }

    else if(this.userModel.apellidos==""){
      this.mensaje_error="El campo correo no puede estar vacio"
    }


    else if(this.userModel.correo==""){
      this.mensaje_error="El campo correo no puede estar vacio"
    }

    else if(this.userModel.rol==""){
      this.mensaje_error="El campo correo no puede estar vacio"
    }

    else if(this.userModel.contrasena==""){
      this.mensaje_error="El campo contraseña no puede estar vacio"
    }

    else{
      //Cuando salta acá ya esta alimentada la información
      this.usuarioService.crear(this.userModel)
      .subscribe(res=>{
      console.log(res);
        if (res.mensaje=="El usuario ya existe") {
          this.mensaje_error=res.mensaje;
        }
        else{
          this.mensaje_ok="Se registro correctamente"
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000);
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
