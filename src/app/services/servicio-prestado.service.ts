import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class ServicioPrestadoService {

  constructor(private httpClient:HttpClient) { }

  listarServiciosPrestados(){
    return this.httpClient.get(`${baserUrl}/servicioPrestado/listaServicioPrestado`);
  }

}
