import { Component, OnInit } from '@angular/core';
import { JefeService } from 'src/app/servicios/jefe.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public token:any

  constructor(private jefeService:JefeService, private router:Router)
  {
    this.token= this.jefeService.obtenerToken();
  }

  ngOnInit(): void {
    this.validar();
  }

  validar(){
    if(this.token){
      this.jefeService.obtenerToken().subscribe(
        response=>{
          console.log(response)
        },
        error=>{
          console.log(error)
        }
      );
    }
    else{
      this.router.navigate(['no-autorizado'])
    }
  }

}
