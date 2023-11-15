import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class MunicipioServicesService {

  baseURL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json'

  constructor( private httpData: HttpClient ) {

  }

  obtenerMunicipios():Observable<any> {
    return this.httpData.get(this.baseURL).pipe( catchError(e => {return throwError(e)}) )
  }


}
