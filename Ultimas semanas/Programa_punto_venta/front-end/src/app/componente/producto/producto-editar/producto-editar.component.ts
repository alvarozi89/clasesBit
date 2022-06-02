import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {

  //Variables auxiliares

  producto !: any;
  id !: any;

  rol !: any;
  token !: any;

  datosCategoria !: any;
  categorias !: any;
  formValue !:FormGroup;

  productoModel : ProductoModel = new ProductoModel();

  imagenUrl !: any;
  imgSelect !: any;

  error_message !:any;
  success_message !:any;

  constructor
  (
    private usuarioService:UsuarioService,
    // private router:Router,
    private productoService:ProductoService,
    private formBuilder:FormBuilder,
    private route : ActivatedRoute,
    private router:Router
  )
  {
    this.rol= this.usuarioService.obtenerRol();
    this.token= this.usuarioService.obtenerToken();
  }

  ngOnInit(): void {
    this.obtenerCampos();
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

    this.obtener();
  }

  obtener(){

    this.route.params.subscribe(params=>{
      this.id = params['id'];
      this.productoService.obtenerProducto(this.id).subscribe(
        response=>{
          this.producto= response
          console.log(this.producto)

          this.formValue.controls['titulo'].setValue(this.producto.titulo)
          this.formValue.controls['precio_compra'].setValue(this.producto.precio_compra)
          this.formValue.controls['precio_venta'].setValue(this.producto.precio_venta)
          this.formValue.controls['stock'].setValue(this.producto.stock)
          this.formValue.controls['descripcion'].setValue(this.producto.descripcion)
          this.formValue.controls['idcategoria'].setValue(this.producto.idcategoria)
          this.formValue.controls['imagen'].setValue(this.producto.imagen)

          this.productoModel._id = this.producto._id

          this.productoService.obtenerCategoria().subscribe(
            response=>{
              this.categorias=response
              console.log(this.categorias)
            }
          )

        }
      )
    })


  }

  actualizarProducto(){

    this.productoModel.titulo= this.formValue.value.titulo;
    this.productoModel.precio_compra= this.formValue.value.precio_compra;
    this.productoModel.precio_venta= this.formValue.value.precio_venta;
    this.productoModel.stock= this.formValue.value.stock;
    this.productoModel.descripcion= this.formValue.value.descripcion;
    this.productoModel.idcategoria= this.formValue.value.idcategoria;


    this.productoService.actualizarProducto(this.productoModel,this.productoModel._id)
    .subscribe(res=>{

      Swal.fire(
        'Producto actualizado!',
        'You clicked the button!',
        'success'
       )
       setTimeout(() => {
          this.router.navigate(['producto-index']);
        }, 2000);
    })


  }

}
