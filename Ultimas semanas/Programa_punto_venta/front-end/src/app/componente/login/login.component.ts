import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../models/user.model';
import { UsuarioService } from '../../servicios/usuario.service';
import Swal from'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   //son variables auxiliares
   public user: any;
   public token: any;
   public identity:any;
   public nombre: any;
   public rol: any;
   public mensaje_ok:any;
   public mensaje_error:any;

   formValue !: FormGroup;

  constructor
  (
    private formBuilder:FormBuilder,
    private usuarioService:UsuarioService,
    private router:Router
  )
   {}

  ngOnInit(): void {

    this.camposLogin();
  }

  camposLogin(){
    this.formValue= this.formBuilder.group({
      correo:[''],
      contrasena:['']
    })
  }

  login(){

    if(this.formValue.value.correo==""){
      //alert("Debe diligenciar su correo")
      this.mensaje_error="Debe diligenciar su correo"
    }

    else if(this.formValue.value.contrasena==""){
      //alert("Debe diligenciar su contraseña")
      this.mensaje_error="Debe diligenciar su contraseña"
    }
    else{
      this.usuarioService.login(this.formValue.value).subscribe(
        response=>{
          console.log(response)
          if(response.mensaje=="correo incorrecto"){

            this.mensaje_error="El correo no existe"
          }
          else if(response.mensaje=="Contraseña incorrecta"){

            this.mensaje_error="La contraseña no es correcta"
          }
          else{

            Swal.fire(
              'Inicio de sesión correcto!',
              'You clicked the button!',
              'success'
             )
                //estas variables auxiliares contiene los datos de la bd
                this.token=response.token
                this.nombre=response.nombres
                this.rol=response.rol
                this.identity=response.id
                localStorage.setItem('token',this.token);
                localStorage.setItem('nombres',this.nombre);
                localStorage.setItem('rol',this.rol);
                localStorage.setItem('id',this.identity);
            this.usuarioService.login(this.formValue.value).subscribe(
              response=>{
                console.log(response)
                this.router.navigate(['inicio'])
              },
              error=>{
                console.log(error)
                alert(error)
              }
            )
          }
        },
        error=>{
          console.log(error)
          alert(error)
        }
      )
    }
  }

  cerrarAlerta(){
    this.mensaje_error=""
  }

}
