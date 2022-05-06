import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado-consolas',
  templateUrl: './listado-consolas.component.html',
  styleUrls: ['./listado-consolas.component.css']
})
export class ListadoConsolasComponent implements OnInit {
  @Input()
  public consolas:any

  constructor() { }

  ngOnInit(): void {
  }

}
