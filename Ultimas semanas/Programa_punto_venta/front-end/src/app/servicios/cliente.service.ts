import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

const base_url = environment.url

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(  private _htpp:HttpClient,) { }

  obtenerCliente(){
    return this._htpp.get<any>(base_url+'cliente/listar')
    .pipe(map((res:any)=>{
      return res;
    }))
  }
}
