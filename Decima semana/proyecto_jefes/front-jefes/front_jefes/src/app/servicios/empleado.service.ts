import { Injectable } from '@angular/core';
import { Observable,map} from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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

  constructor(private http:HttpClient) { }

    //las rutas deben ser iguales a las de backend
    listarEmpleados(){
      return this.http.get<any>(base_url+'empleado/listarEmpleados')
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    obtenerEmpleadosDeUnJefe(){
      return this.http.get<any>(base_url+'empleado/listarEmpleados')
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    buscarFiltro(){
      return this.http.get<any>(base_url+'empleado/listarEmpleados')
      .pipe(map((res:any)=>{
        return res;
      }))
    }

    eliminarEmpleado(){

    }

    actualizarEmpleado(){

    }


}
