import { Component, OnInit } from '@angular/core';
import { ProductoModel } from 'src/app/models/producto.model';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ProductoService } from 'src/app/servicios/producto.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-producto-editar',
  templateUrl: './producto-editar.component.html',
  styleUrls: ['./producto-editar.component.css']
})
export class ProductoEditarComponent implements OnInit {
  public producto: any;
  public id: any;
  public categorias: any;
  public success_message: any;
  public error_message: any;

  formValue !: FormGroup;
  productoModel:ProductoModel= new ProductoModel()

  constructor(private formbuilder:FormBuilder,private productoService: ProductoService,  private _route : ActivatedRoute) { }

  ngOnInit(): void {
    this.obtenerCampos()
  }

  obtenerCampos(){
    this.formValue= this.formbuilder.group({
      titulo: [''],
      precio_compra: [''],
      precio_venta:[''],
      stock:[''],
      descripcion:[''],
      idcategoria:[''],
    })

    this.obtener()
  }

  obtener(){
    this._route.params.subscribe(params=>{
      this.id = params['id'];
      this.productoService.obtenerProducto(this.id).subscribe(
        response=>{
          this.producto = response;
          console.log(this.producto.titulo);
          this.formValue.controls['titulo'].setValue(this.producto.titulo);
          this.formValue.controls['precio_compra'].setValue(this.producto.precio_compra);
          this.formValue.controls['precio_venta'].setValue(this.producto.precio_venta);
          this.formValue.controls['stock'].setValue(this.producto.stock);
          this.formValue.controls['descripcion'].setValue(this.producto.descripcion);
          this.formValue.controls['idcategoria'].setValue(this.producto.idcategoria);
          this.productoModel._id= this.producto._id
          this.productoService.obtenerCategoria().subscribe(
            response=>{
              this.categorias = response;
              console.log(this.categorias);
            },
            error=>{
            }
          );
        },
        error=>{
        }
      )
    });
  }




  actualizar(){

    this.productoModel.titulo= this.formValue.value.titulo;
    this.productoModel.precio_compra= this.formValue.value.precio_compra;
    this.productoModel.precio_venta= this.formValue.value.precio_venta;
    this.productoModel.stock= this.formValue.value.stock;
    this.productoModel.descripcion= this.formValue.value.descripcion;
    this.productoModel.idcategoria= this.formValue.value.idcategoria;

    this.productoService.actualizarProducto(this.productoModel,this.productoModel._id)
    .subscribe(res=>{

      this.success_message = 'Se actualizó el producto correctamente';
      //this.formValue.reset();

    })
  }

}
