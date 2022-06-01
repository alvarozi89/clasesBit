import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public token:any
  constructor(private usuarioService:UsuarioService, private router:Router)
  {
    this.token= this.usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.validar()
  }

  validar(){
    if(this.token){

    }
    else{
      this.router.navigate(['no-autorizado'])
    }
  }



}
