import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ProductoModel } from 'src/app/models/producto.model';
import { ProductoService } from 'src/app/servicios/producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import swal from'sweetalert2';



// interface HtmlInputEvent extends Event {
//   target: HTMLInputElement & EventTarget | null;
// }
interface HtmlInputEvent extends Event{
  target : HTMLInputElement & EventTarget;
}


@Component({
  selector: 'app-producto-registrar',
  templateUrl: './producto-registrar.component.html',
  styleUrls: ['./producto-registrar.component.css']
})
export class ProductoRegistrarComponent implements OnInit {
  public identity;
  datosCategoria !:any;
  categorias:any;
  formValue !: FormGroup;
  productoModel:ProductoModel= new ProductoModel()
  imagenUrl:any;
  imgSelect : any | ArrayBuffer;
  public archivos: any[] | undefined
  public success_message: any;
  public error_message: any;

  public file: File | undefined;

  constructor(private formbuilder:FormBuilder,private productoService: ProductoService
    ,private userService : UsuarioService,) {this.identity =this.userService.obtenerIdentidad(); }

  ngOnInit(): void {
    this.agregarCampos()
    this.listarCategoria()
  }

  listarCategoria(){
    this.productoService.obtenerCategoria()
    .subscribe(res=>{
      this.datosCategoria=res
      console.log(this.datosCategoria)
    })


  }

  agregarCampos(){
    this.formValue= this.formbuilder.group({
      titulo: [''],
      precio_compra: [''],
      precio_venta: [''],
      stock: [''],
      idcategoria: [''],
      imagen: [''],
      descripcion: [''],

    })
  }


  agregarProducto(){
    this.productoModel.titulo= this.formValue.value.titulo;
    this.productoModel.precio_compra= this.formValue.value.precio_compra;
    this.productoModel.precio_venta= this.formValue.value.precio_venta;
    this.productoModel.stock= this.formValue.value.stock;
    this.productoModel.imagen= `${this.file}`;
    this.productoModel.idcategoria=this.formValue.value.idcategoria
    this.productoModel.descripcion=this.formValue.value.descripcion

    alert(this.productoModel.idcategoria +this.file)
    console.log("en guardado" +this.file)


    this.productoService.agregar(this.productoModel)
    .subscribe(res=>{
      console.log(res);
      alert("Producto creado")
      swal.fire(
        'Good job!',
        'You clicked the button!',
        'success'
      )
      this.formValue.reset();
      this.imagenUrl="";
      this.imgSelect = '../../../../assets/img/default.jpg';
      this.success_message = 'Se registro el producto correctamente';
      //this.componenteHijo.listar()

    },
    err=>{
      alert("Error")
    })

  }

  seleccionarImagen(event:any){

      this.file = <File>event.target.files[0];

      const reader = new FileReader();
      reader.onload = e => this.imgSelect= reader.result;
      reader.readAsDataURL(this.file);


      console.log(this.file)



  }

  success_alert(){
    this.success_message = '';
   }

   error_alert(){
     this.error_message = '';
    }

  prueba(evente:any) {
    const archivo= evente.target.files[0]
    this.archivos?.push(archivo)
    console.log(evente.target.files);
  }

}

