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
  datosVenta !:any;
  public identity: any;
  public ventas: any;

  constructor(
    private userService : UsuarioService,
    private ventaService : VentaService,
    private router : Router,
  ) {
    this.identity = this.userService.obtenerIdentidad();
  }

  ngOnInit(): void {
    this.listarProtegido()

  }

  listarProtegido(){

    if(this.identity){
      //USUARIO AUTENTICADO
      this.ventaService.obtenerVentas().subscribe(
        response=>{
          this.ventas = response.listar;
          console.log(this.ventas);
        },
        error=>{

        }
      );
    }else{
      this.router.navigate(['']);
    }

  }

  listar(){
    this.ventaService.obtenerVentas()
    .subscribe(res=>{
      this.datosVenta=res
      console.log(this.datosVenta)
    })


  }

}


