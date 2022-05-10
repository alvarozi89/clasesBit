import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario1',
  templateUrl: './formulario1.component.html',
  styleUrls: ['./formulario1.component.css']
})
export class Formulario1Component implements OnInit {

  formValue!: FormGroup;

  public data_detalle : Array<any>=[];
  public estrato=[1,2,3,4,5];
  public ciudad = ["Pasto", "Cali", "Pereira" ,"Medellin" ,"Bogotá"]

  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.obtenerCamposFormulario();

  }

  obtenerCamposFormulario(){
    this.formValue = this.formBuilder.group({
      nombres : [''],
      apellidos: [''],
      estrato : [''],
      ciudad: ['']
    })

  }


}
