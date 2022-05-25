import { Injectable } from '@angular/core';
import { Observable,map } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
const base_url = environment.url;


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public user: any;
  public token: any;
  public identity: any;
  public nombres: any;
  public id: any;
  public rol: any;


  constructor(
    private _htpp:HttpClient,
  )
  {

  }

  crear(data:any){
    return this._htpp.post<any>(base_url+'usuario/crearUsuario',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


    login(user: any,obtenerToken=null):Observable<any>{
      let json = user;
      if(obtenerToken!=null){
        user.token= true

      }
      let headers = new HttpHeaders().set('Content-Type','application/json')
      return this._htpp.post(base_url +'usuario/login',json,{headers:headers})

    }

    obtenerToken():Observable<any>{
      let token = localStorage.getItem('token');
      if(token){
        this.token = token
      }

      else {
        this.token= null;
      }

      return this.token;
    }

    obtenerIdentidad():Observable<any>{

      let identity = localStorage.getItem('rol');
      if(identity){
        this.identity = identity
      }

      else {
        this.identity= null;
      }

      return this.identity;

    }

    obtenerNombre():Observable<any>{

      let nombres = localStorage.getItem('nombres');
      if(nombres){
        this.nombres = nombres
      }

      else {
        this.nombres= null;
      }

      return this.nombres;

    }

    obtenerId():Observable<any>{
      let id = localStorage.getItem('id');
      if(id){
        this.id = id
      }

      else {
        this.id= null;
      }

      return this.id;

    }

    obtenerRol():Observable<any>{
      let rol = localStorage.getItem('rol');
      if(rol){
        this.rol = rol
      }

      else {
        this.rol= null;
      }

      return this.rol;

    }

    obtenerUsuarios(){
      return this._htpp.get<any>(base_url+'usuario/listar')
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    obtenerUsuarioParametro(nombres:any){
      return this._htpp.get<any>(base_url+'usuario/listarNombre/'+nombres)
      .pipe(map((res:any)=>{
        return res;
      }))
    }



    obtenerUsuario(id:number){
      return this._htpp.get<any>(base_url+'usuario/listarUsuario/'+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }



    actualizarUsuario(data: any, id:number){
      return this._htpp.put<any>(base_url+'usuario/actualizarUsuario/'+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    deleteUsurio(_id: string) {
      return this._htpp.delete(base_url +'usuario/eliminarUsuario/'+_id);
    }



}
