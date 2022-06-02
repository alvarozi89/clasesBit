import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VentaService } from 'src/app/servicios/venta.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';


@Component({
  selector: 'app-venta-detalle',
  templateUrl: './venta-detalle.component.html',
  styleUrls: ['./venta-detalle.component.css']
})
export class VentaDetalleComponent implements OnInit {

  public id: any;
  public total: any;
  public subtotal: any;
  public venta: any ={
    iduser:'',
    idcliente: ''
  };

  public detalle_venta:any;
  public token:any;



  constructor
  (
    private usuarioService:UsuarioService,
    private ventaService: VentaService,
    private route : ActivatedRoute,
    private router:Router
  )

  {  }

  ngOnInit(): void {

    this.obtenerDatos();
  }

  obtenerDatos(){

    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.ventaService.obtenerVentasId(this.id).subscribe(
        response=>{
          console.log(response)


        }
      )
    })

  }



}
