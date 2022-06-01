import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/servicios/producto.service';
import { UsuarioService } from 'src/app/servicios/usuario.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-producto-index',
  templateUrl: './producto-index.component.html',
  styleUrls: ['./producto-index.component.css']
})
export class ProductoIndexComponent implements OnInit {
  public rol:any
  public token:any
  public dataProductos:any
  constructor
   (
    private usuarioService:UsuarioService,
    private router:Router,
    private productoService:ProductoService,
    private formBuilder:FormBuilder)
    {
      this.rol= this.usuarioService.obtenerRol();
      this.token= this.usuarioService.obtenerToken();
    }

  ngOnInit(): void {
    this.listar();
  }

  listar(){
    this.productoService.obtenerProductos()
    .subscribe(res=>{
      this.dataProductos=res
      console.log(this.dataProductos)
    })

  }


}
