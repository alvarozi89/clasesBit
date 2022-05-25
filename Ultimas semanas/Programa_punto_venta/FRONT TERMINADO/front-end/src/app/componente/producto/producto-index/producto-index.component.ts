import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';





@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css']
})
export class ProductoIndexComponent implements OnInit {

  datosProductos !:any;

  public base_url = environment.url;
  public filtro: any;
  public filtroText:any;


  constructor
   (
    private productoService: ProductoService,
    private router :Router) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.productoService.obtenerProductos()
    .subscribe(res=>{
      this.datosProductos=res
      console.log(this.datosProductos)
    })


  }

  search(searchForm:any){
    this.productoService.obtenerProductosParametro(searchForm.value.filtro)
    .subscribe(res=>{
      this.datosProductos=res
      console.log(this.datosProductos)
    })
    if(this.filtroText==""){
      this.listar();

    }

  }


  eliminarProducto(row: any){
    this.productoService.deleteProducto(row._id)
    .subscribe(res=>{
      alert("Producto eliminado");
      this.listar();
    })

  }


  // search(searchForm){
  //   this.productoService.get_productos(searchForm.value.filtro).subscribe(
  //     response =>{
  //       this.productos = response.productos;
  //     },
  //     error=>{

  //     }
  //   );

  // }

}
