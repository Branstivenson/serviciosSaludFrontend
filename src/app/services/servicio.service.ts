import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private httpClient:HttpClient) { }

  nuevoServicio(servicio:any){
    return this.httpClient.post(`${baserUrl}/servicio/guardarServicioDto2`,servicio);
  }

  listarServicios(){
    return this.httpClient.get(`${baserUrl}/servicio/listaServicioDto2`);
  }

  buscarServicio(cadena:any){
    return this.httpClient.get(`${baserUrl}/servicio/listaPorNombre/${cadena}`)
  }

  actualizarServicio(servicioData:any){
    return this.httpClient.put(`${baserUrl}/servicio/actualizarServicioDto2`,servicioData);
  }

  eliminarServicio(id:any){
    return this.httpClient.put(`${baserUrl}/servicio/eliminarServicio/${id}`,{});
  }

}
