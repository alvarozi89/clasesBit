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





  constructor(

  ) {}

  ngOnInit(): void {


  }


}
