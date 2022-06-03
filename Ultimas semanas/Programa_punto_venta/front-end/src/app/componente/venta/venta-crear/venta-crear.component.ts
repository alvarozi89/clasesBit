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

//variables auxiliares
 formValue !: FormGroup;
 formProductos !: FormGroup;

 public idUser: any;
 public nombre: any;
 public clientes: any;

 public cantidad: any;

 public venta: any ={
   idcliente: ''
 }

 public productos: any;

 public producto: any = {
   stock : '--|--'
 }

 public total =0;

 public data_detalle : Array<any>= [];

 public detalle : any = {
   idproducto: ''
 }

 public error_message: any;


  constructor
  (
     private formBuilder: FormBuilder,
     private usuarioService:UsuarioService,
     private productoService: ProductoService,
     private router: Router,
     private ventaService:VentaService,
     private clienteService:ClienteService

  )
  {
    this.nombre = this.usuarioService.obtenerNombre();
    this.idUser = this.usuarioService.obtenerId();

  }

  ngOnInit(): void {
    this.listarClientes();
    this.listarProductos();
  }

  listarClientes(){
    this.clienteService.obtenerCliente()
    .subscribe(res=>{
      this.clientes=res
      console.log(this.clientes)
    })

  }

  listarProductos(){
    this.productoService.obtenerProductos()
    .subscribe(res=>{
      this.productos=res
      console.log(this.productos)
    })

  }

  get_data_producto(id:any){
    this.productoService.obtenerProducto(id).subscribe(response=>{
      this.producto= response
      console.log(this.producto)
    })
  }

  save_detalle(detalleForm:any){

      if(detalleForm.value.cantidad <= this.producto.stock){
        this.data_detalle.push({
          idproducto: detalleForm.value.idproducto,
          cantidad: detalleForm.value.cantidad,
          producto: this.producto.titulo,
          precio_venta: this.producto.precio_venta,
        })

        this.detalle = new DetalleVenta('','',0);
        this.producto.stock= "--|--";
        this.cantidad=0;

        this.total = this.total + (parseInt(this.producto.precio_venta)* parseInt(detalleForm.value.cantidad))
        console.log(this.total)

      }

    else{
      this.error_message= "No hay suficiente stock"
    }

  }

  eliminar(idx:any, precio_venta:any, cantidad:any){
    this.data_detalle.splice(idx,1);
    this.total= this.total - (parseInt(precio_venta)* parseInt(cantidad))
  }

  onSubmit(ventaForm:any){

    if(ventaForm.value.idcliente != ''){

      let data = {
        idcliente: ventaForm.value.idcliente,
        iduser: this.idUser,
        detalles: this.data_detalle
      }

      this.ventaService.registrarVenta(data).subscribe(response=>{
        this.router.navigate(['venta-index'])
      },error=>{
        console.log(error)
      })
    }

    else {
      this.error_message= "Selecciona un cliente"
    }

  }


  close_alert(){

  }

}
