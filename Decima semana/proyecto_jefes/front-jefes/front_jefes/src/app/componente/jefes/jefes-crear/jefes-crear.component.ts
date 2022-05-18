import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Jefe } from '../../models/jefe.models';
import { JefeService } from 'src/app/servicios/jefe.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jefes-crear',
  templateUrl: './jefes-crear.component.html',
  styleUrls: ['./jefes-crear.component.css']
})
export class JefesCrearComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
