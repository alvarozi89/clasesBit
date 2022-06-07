import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import { Producto } from 'src/app/models/producto.model';
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

  //variable nueva producto
  public producto:any;
  datosCategoria !: any;
  categorias !: any;
  formValue !:FormGroup;

  fecha !:any;
  date7!: Date;
  date8!: Date;
  rangeDates!: Date[];

  minDate!: Date;

  maxDate!: Date;

  invalidDates!: Array<Date>

  productoModel2 : ProductoModel = new ProductoModel();
  //productoModel : Producto = new Producto();

  error_message !:any;
  success_message !:any;

  public rol:any
  public token:any


  public productoModel:any;

  public imagenSubir:any;

//variables imagenes

public file!: File;
public archivos: any[] | undefined
imagenUrl !: any;
public imgSelect : String | ArrayBuffer | any;

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
    //otra manera de inicializar los campos del modelo
    this.producto = new Producto('','','','',1,1,1,'');
   }

  ngOnInit(): void {
    this.validar();
  }

  //esta funcion es para fecha con PrimeNg
  camposFecha(){
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month -1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;
    this.minDate = new Date();
    this.minDate.setMonth(prevMonth);
    this.minDate.setFullYear(prevYear);
    this.maxDate = new Date();
    this.maxDate.setMonth(nextMonth);
    this.maxDate.setFullYear(nextYear);
    let invalidDate = new Date();
    invalidDate.setDate(today.getDate() - 1);
    this.invalidDates = [today,invalidDate];
  }

  validar(){
    if(this.rol!="ADMIN"){
      this.router.navigate(['no-autorizado'])
    }

    else{

      this.listarCategorias();
      this.obtenerCampos();
      this.camposFecha();


    }

  }

  obtenerCampos(){
    this.formValue = this.formBuilder.group({
      titulo:[''],
      precio_compra:[''],
      precio_venta: [''],
      stock: [''],
      descripcion: [''],
      idcategoria: ['']
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

    this.productoModel2.titulo = this.formValue.value.titulo;
    this.productoModel2.precio_compra = this.formValue.value.precio_compra;
    this.productoModel2.precio_venta = this.formValue.value.precio_venta;
    this.productoModel2.stock = this.formValue.value.stock;
    this.productoModel2.descripcion = this.formValue.value.descripcion;
    this.productoModel2.idcategoria = this.formValue.value.idcategoria;
    this.productoModel2.imagen = this.file;

    if(this.productoModel2.titulo==""){
      this.error_message="El campo titulo no puede estar vacio"
    }

    else if(this.productoModel2.descripcion==""){
      this.error_message="El campo descripción no puede estar vacio"
    }


    else{
      //Cuando salta acá ya esta alimentada la información
      this.productoService.agregar(this.productoModel2)
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
          })
          this.imagenUrl="";
          this.imgSelect = '../../../../assets/img/default.jpg';

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

  //nuevo metodo, este sirve para cargar las imagenes
  onSubmit(productoForm:any){
    if(productoForm.valid){
      if (this.file!=this.imgSelect) {
        this.productoService.insert_producto({
          titulo: productoForm.value.titulo,
          descripcion: productoForm.value.descripcion,
          imagen: this.file,
          precio_compra: productoForm.value.precio_compra,
          precio_venta: productoForm.value.precio_venta,
          stock: productoForm.value.stock,
          idcategoria: productoForm.value.idcategoria,

        }).subscribe(
          response =>{
           this.success_message = 'Se registro el producto correctamente';
           this.producto = new Producto('','','','',1,1,1,'');
           this.imgSelect = '../../../../assets/img/default.jpg';
           this.imagenUrl=""
           this.file=this.imgSelect;
          },
          error=>{

          }
        );

      }

      else{
        this.error_message = 'Favor cargue una imagen';

      }

    }else{
      this.error_message = 'Complete correctamente el formulario';

    }
  }



seleccionarImagen(event: any){
  if(event.target.files  && event.target.files[0]){
      this.file = <File>event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imgSelect= reader.result;
      reader.readAsDataURL(this.file);
      console.log("soy el file " +this.file)
  }
}




}

