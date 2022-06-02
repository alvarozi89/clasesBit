import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { VentaService } from 'src/app/servicios/venta.service';

@Component({
  selector: 'app-venta-index',
  templateUrl: './venta-index.component.html',
  styleUrls: ['./venta-index.component.css']
})
export class VentaIndexComponent implements OnInit {

  public datosVenta !: any;
  public id !: any;
  public ventas !: any;

  constructor(
    private usuarioService :UsuarioService,
    private  ventaService :VentaService,
    private router: Router

  )
  {
    this.id= this.usuarioService.obtenerId();
  }

  ngOnInit(): void {
    this.listarVentas();

  }

  listarVentas(){
    this.ventaService.obtenerVentas().subscribe(
      response=>{
        this.datosVenta= response.listar
        console.log(this.datosVenta)
      }
    )

  }



}


