import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';
import { VentaService } from 'src/app/servicios/venta.service';
import { DetalleVenta } from 'src/app/models/DetalleVenta';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ClienteService } from 'src/app/servicios/cliente.service';



@Component({
  selector: 'app-venta-crear',
  templateUrl: './venta-crear.component.html',
  styleUrls: ['./venta-crear.component.css']
})
export class VentaCrearComponent implements OnInit {

  public idPrueba: any;
  formValue !: FormGroup;
  formProductos !: FormGroup;
  public identity: any;
  public nombre: any;
  public idLocal: any
  public clientes : any;
  public venta : any = {
    idcliente : '',
  };
  public productos: any;
  public producto : any = {
    stock : '--|--',
  }
  public total = 0;

  public data_detalle : Array<any> = [];
  public detalle : any = {
    idproducto : ''
  };
  public error_message: any;

  constructor(
    private formbuilder:FormBuilder,
    private _userService:UsuarioService,
    private productoService : ProductoService,
    private _router:Router,
    private _ventaService : VentaService,
    private clienteService:ClienteService


  ) {this.identity =this._userService.obtenerIdentidad();
    this.nombre =this._userService.obtenerNombre();
    this.idLocal =this._userService.obtenerId();}

  ngOnInit(): void {
    this.agregarCampos()
    this.listarCliente()
    this.listarProducto()

  }

  agregarCampos(){
    this.formValue= this.formbuilder.group({
      //trabajador: [''],
      cliente :[''],

    })
  }

  listarCliente(){
    this.clienteService.obtenerCliente()
    .subscribe(res=>{
      this.clientes=res
      console.log(this.clientes)
    })


  }

  listarProducto(){
    this.productoService.obtenerProductos()
    .subscribe(res=>{
      this.productos=res
      console.log(this.productos)
    })


  }

  get_data_producto(id: any){
    this.productoService.obtenerProducto(id).subscribe(
      response=>{
        this.producto = response;
        console.log("data producto "+this.producto.stock)

      },
      error=>{

      }

    );

  }

  close_alert(){
    this.error_message = '';
  }

  save_detalle(detalleForm:any){
    if(detalleForm.valid){
        if(detalleForm.value.cantidad <= this.producto.stock){
          this.data_detalle.push({
            idproducto : detalleForm.value.idproducto,
            cantidad: detalleForm.value.cantidad,
            producto: this.producto.titulo,
            precio_venta : this.producto.precio_venta
          });

          this.detalle = new DetalleVenta('','',0);
          this.producto.stock = '--|--',


          this.total = this.total + (parseInt(this.producto.precio_venta) * parseInt(detalleForm.value.cantidad));
          console.log( this.total);
        }
        else{
          this.error_message = 'No existe el suficiente stock para la venta';
        }
    }else{
      console.log("error");
    }
  }

  eliminar(idx: number,precio_venta: string,cantidad: string){
    this.data_detalle.splice(idx,1);
    this.total=this.total - (parseInt(precio_venta)*parseInt(cantidad));
  }

  onSubmit(ventaForm:any){
    if(ventaForm.valid){
      if(ventaForm.value.idcliente != ''){
        let data = {
          idcliente: ventaForm.value.idcliente,
          iduser: this.idLocal,
          detalles: this.data_detalle
        }

        this._ventaService.registrarVenta(data).subscribe(
          response =>{
            this._router.navigate(['venta-index']);
            console.log("estoy en data " + this.data_detalle)
          },
          error=>{
            console.log(error);
          }
        );

      }else{
        console.log('error');
      }

    }else{
      console.log('error');

    }
  }

}
