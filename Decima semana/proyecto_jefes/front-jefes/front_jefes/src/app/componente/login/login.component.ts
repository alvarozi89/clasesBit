import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JefeService } from 'src/app/servicios/jefe.service';
import { Jefe } from '../models/jefe.models';

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
  public mensaje_ok:any;
  public mensaje_error:any;

  formValue !: FormGroup;


  constructor
  (
  private formBuilder:FormBuilder,
  private jefeService:JefeService,
  private router:Router
  ) { }

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
      alert("Debe diligenciar su correo")
    }

    else if(this.formValue.value.contrasena==""){
      alert("Debe diligenciar su contraseña")
    }
    else{
      this.jefeService.login(this.formValue.value).subscribe(
        response=>{
          console.log(response)

          if(response=="correo incorrecto"){
            alert("El correo no existe")
          }

          else if(response=="Contraseña incorrecta"){
            alert("La contraseña no es correcta")
          }

          else{
            alert("Inicio de sesión correcto")
                //estas variables auxiliares contiene los datos de la bd
                this.token=response
                this.nombre=response
                this.identity=response
                localStorage.setItem('token',this.token);
                localStorage.setItem('nombres',this.nombre);
                localStorage.setItem('id',this.identity);

            this.jefeService.login(this.formValue.value).subscribe(
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
}
