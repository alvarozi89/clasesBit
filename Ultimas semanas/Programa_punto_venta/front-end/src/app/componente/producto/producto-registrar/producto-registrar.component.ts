import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import swal from'sweetalert2';


interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-producto-registrar',
  templateUrl: './producto-registrar.component.html',
  styleUrls: ['./producto-registrar.component.css']
})
export class ProductoRegistrarComponent implements OnInit {

  //Variables auxiliares
  datosCategoria !: any;
  categorias !: any;
  formValue !:FormGroup;

  productoModel : ProductoModel = new ProductoModel();

  imagenUrl !: any;
  imgSelect !: any;

  error_message !:any;
  success_message !:any;


  public rol:any
  public token:any


  constructor
  (
    private usuarioService:UsuarioService,
    private router:Router,
    private productoService:ProductoService,
    private formBuilder:FormBuilder
  )
   {
    this.rol= this.usuarioService.obtenerRol();
    this.token= this.usuarioService.obtenerToken();
   }

  ngOnInit(): void {
    this.validar();

  }

  validar(){
    if(this.rol!="ADMIN"){
      this.router.navigate(['no-autorizado'])
    }

    else{

      this.listarCategorias();
      this.obtenerCampos();


    }

  }

  obtenerCampos(){
    this.formValue = this.formBuilder.group({
      titulo:[''],
      precio_compra:[''],
      precio_venta: [''],
      stock: [''],
      descripcion: [''],
      idcategoria: [''],
      imagen: ['']
    })
  }

  listarCategorias(){
    this.productoService.obtenerCategoria()
    .subscribe(res=>{
      this.datosCategoria=res
      console.log(this.datosCategoria)
    })

  }

  CrearProducto(){

    this.productoModel.titulo = this.formValue.value.titulo;
    this.productoModel.precio_compra = this.formValue.value.precio_compra;
    this.productoModel.precio_venta = this.formValue.value.precio_venta;
    this.productoModel.stock = this.formValue.value.stock;
    this.productoModel.descripcion = this.formValue.value.descripcion;
    this.productoModel.idcategoria = this.formValue.value.idcategoria;
    this.productoModel.imagen = "imagen";

    if(this.productoModel.titulo==""){
      this.error_message="El campo titulo no puede estar vacio"
    }

    else if(this.productoModel.descripcion==""){
      this.error_message="El campo descripción no puede estar vacio"
    }


    else{
      //Cuando salta acá ya esta alimentada la información
      this.productoService.agregar(this.productoModel)
      .subscribe(res=>{
      console.log(res);
        if (res.mensaje=="El prodcuto ya existe") {
          this.error_message=res.mensaje;
        }
        else{
          this.success_message="Se registro correctamente"
          this.formValue = this.formBuilder.group({
            titulo:[''],
            precio_compra:[''],
            precio_venta: [''],
            stock: [''],
            descripcion: [''],
            idcategoria: [''],
            imagen: ['']
          })
          // setTimeout(() => {
          //   this.router.navigate(['']);
          // }, 2000);
        }
      },
      err=>{
        console.log(err)
      })
    }
  }



}

