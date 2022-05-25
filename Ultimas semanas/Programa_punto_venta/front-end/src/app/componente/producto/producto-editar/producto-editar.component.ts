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

  constructor() { }

  ngOnInit(): void {

  }


}
