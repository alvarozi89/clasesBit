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
  public venta : any = {
  iduser: '',
  idcliente: ''
  };


  public detalle_venta: any;
  public _venta: any;
  public identity;

  constructor(
    private route : ActivatedRoute,
    private ventaService : VentaService,
    private userService : UsuarioService,
    private router : Router
  ) { this.identity =this.userService.obtenerIdentidad(); }

  ngOnInit(): void {

    this.validar()

  }

  validar() {

    if(this.identity){
      this.route.params.subscribe(params=>{
        this.id = params['id'];
        this.ventaService.obtenerVentasId(this.id).subscribe(
          response=>{
            console.log(response)
            this.venta = response.data.venta;
            this.detalle_venta = response.data.detalles;
            console.log(this.detalle_venta._id)


            // this.total = this.total + (parseInt(response.data.detalles.idproducto.precio_venta) * parseInt(response.data.detalles.idproducto.precio_venta));
            // console.log( this.total);

          },

          error=>{

          }
        );




      });
    }else{
      //this.router.navigate(['']);

    }

  }

}
