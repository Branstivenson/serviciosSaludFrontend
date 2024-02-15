import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baserUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private httpClient:HttpClient) { }
  
  insertarUsuario(usuario:any){
    return this.httpClient.post(`${baserUrl}/usuario/almacenarUsuarioDto`, usuario);
  }


}
