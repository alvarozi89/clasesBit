import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs';

const base_url = environment.url;

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor(
    private _htpp:HttpClient,
  )
  { }

  obtenerProductos(){
    return this._htpp.get<any>(base_url+'producto/listar')
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  obtenerProductosParametro(nombre:any){
    return this._htpp.get<any>(base_url+'producto/listarNombre/'+nombre)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  obtenerCategoria(){
    return this._htpp.get<any>(base_url+'categoria/listarCategoria')
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  agregar(data:any){
    return this._htpp.post<any>(base_url+'producto/crearProducto',data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }


  obtenerProducto(id:number){
    return this._htpp.get<any>(base_url+'producto/listarProducto/'+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }



  actualizarProducto(data: any, id:number){
    return this._htpp.put<any>(base_url+'producto/actualizarProducto/'+id,data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  deleteProducto(_id: string) {
    return this._htpp.delete(base_url +'producto/eliminarProducto/'+_id);
  }


  // update_producto(data:any){
  //   const fd = new FormData();
  //   fd.append('titulo',data.titulo);
  //   fd.append('descripcion',data.descripcion);
  //   fd.append('imagen',data.imagen);
  //   fd.append('precio_compra',data.precio_compra);
  //   fd.append('precio_venta',data.precio_venta);
  //   fd.append('idcategoria',data.idcategoria);
  //   fd.append('puntos',data.puntos);

  //   return this._http.put(this.url + 'producto/editar/'+data._id+'/'+data.img_name,fd);
  // }
}


