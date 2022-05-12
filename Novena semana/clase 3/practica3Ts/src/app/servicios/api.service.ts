import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

URL_API='https://www.breakingbadapi.com/api/characters';

  constructor(private http:HttpClient) { }

  obtenerDatos(){
    return this.http.get<any>(this.URL_API)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

}
