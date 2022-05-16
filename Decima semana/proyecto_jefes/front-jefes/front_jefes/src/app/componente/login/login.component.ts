import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JefeService } from 'src/app/servicios/jefe.service';

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

}
