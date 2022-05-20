import { Injectable } from '@angular/core';
import { Observable,map} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { JefeService } from './jefe.service';

const base_url= environment.url
@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
   //Variables auxiliares
   public user: any;
   public token: any;
   public identity: any;
   public nombres: any;
   public id: any;

  constructor(private http:HttpClient,private jefeService:JefeService) {this.token= this.jefeService.obtenerToken(); }

    //las rutas deben ser iguales a las de backend
    listarEmpleados(){
      return this.http.get<any>(base_url+'empleado/listarEmpleados')
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    obtenerEmpleadosDeUnJefe(id:any){
      let headers = new HttpHeaders().set('autorizacion',this.token)
      return this.http.get<any>(base_url+'empleado/listarEmpleadoPorJefe/'+id,{headers:headers})
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    obtenerIdEmpleado(id:any){
      return this.http.get<any>(base_url+'empleado/listarEmpleadoId/'+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }


    buscarFiltro(id:any,nombre:any){
      return this.http.get<any>(base_url+'empleado/listarEmpleadoPorJefeFiltro/'+id +'/' + nombre)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    CrearEmpleado(data:any){
      return this.http.post<any>(base_url+'empleado/crearEmpleado',data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    eliminarEmpleado(id:any){
      return this.http.delete<any>(base_url+'empleado/eliminarEmpleado/'+id)
    }

    actualizarEmpleado(id:any, data:any){
      return this.http.put<any>(base_url+'empleado/actualizarEmpleado/'+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }


}
