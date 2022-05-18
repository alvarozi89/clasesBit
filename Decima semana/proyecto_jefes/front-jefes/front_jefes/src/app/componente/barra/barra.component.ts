import { Component, OnInit } from '@angular/core';
import { JefeService} from 'src/app/servicios/jefe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra',
  templateUrl: './barra.component.html',
  styleUrls: ['./barra.component.css']
})
export class BarraComponent implements OnInit {

  //variables auxiliares

  public id: any;
  public token: any;
  public nombre: any;

  constructor(private jefeService:JefeService, private router:Router)
  {
    this.id= this.jefeService.obtenerIdentidad();
    this.token= this.jefeService.obtenerToken();
    this.nombre= this.jefeService.obtenerNombre();

  }

  ngOnInit(): void {
  }

  cerrarSesion(){

    localStorage.removeItem('token');
    localStorage.removeItem('nombre');
    localStorage.removeItem('id');

    this.id=null;
    this.token=null;
    this.nombre=null;

    this.router.navigate([''])

  }

}
