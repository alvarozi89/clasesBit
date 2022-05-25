import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsuarioService } from '../../servicios/usuario.service';
import swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formValue !: FormGroup;

  public user:any;
  public token:any;
  public identity:any;
  public nombre:any;
  public rol:any;
  public idLocal:any;
  public data_error:any;

  constructor
  (private formbuilder:FormBuilder,
  private usuarioService: UsuarioService,
  private router :Router)
   {

   }

  ngOnInit(): void {
    this.camposLogin();
  }

  camposLogin(){
    this.formValue= this.formbuilder.group({
      correo: ['',Validators.required],
      contrasena: ['']
    })
  }

  login(){

    if(this.formValue.value.correo==""){

      swal.fire(
        "El campo no puede estar vacio",
        'You clicked the button!',
        'error'
      )
    }
    else if(this.formValue.value.contrasena==""){
      swal.fire(
        "El campo no puede estar vacio",
        'You clicked the button!',
        'error'
      )
    }
    else {
    this.usuarioService.login(this.formValue.value).subscribe(
      response =>{
        console.log(response)
        if(response.mensaje=="correo incorrecto"){
          alert("El correo no existe")
          swal.fire(
            response.mensaje,
            'You clicked the button!',
            'success'
          )
          this.data_error=response.mensaje
        }
        else if(response.mensaje=="Contraseña incorrecta"){
          swal.fire(
            response.mensaje,
            'You clicked the button!',
            'success'
          )
          this.data_error=response.mensaje
        }
        else {

          swal.fire(
            response.mensaje,
            'You clicked the button!',
            'success'
          )

          this.token= response.token
          this.nombre= response.nombres
          this.rol= response.rol
          this.idLocal= response.id
          localStorage.setItem('token', this.token);
          localStorage.setItem('nombres', this.nombre);
          localStorage.setItem('rol', this.rol);
          localStorage.setItem('id', this.idLocal);
          this.usuarioService.login(this.formValue.value).subscribe(
            response=>{
              console.log(response)
              localStorage.setItem('identity',JSON.stringify(response))
              this.router.navigate(['inicio']);
            },
            error=>{
              console.log(error)
            }
          )
          this.formValue.reset();
        }
      },
      error=>{
        console.log(error.mensaje)
        alert("Hay problemas en el servidor")
      }
    )
  }
  }
}
