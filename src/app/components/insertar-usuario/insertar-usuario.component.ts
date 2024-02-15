import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-insertar-usuario',
  templateUrl: './insertar-usuario.component.html',
  styleUrls: ['./insertar-usuario.component.css']
})
export class InsertarUsuarioComponent {

  constructor(private usuarioService:UsuarioService){

  }

  usuario={
    identificacion:'',
    nombreCompleto:''
  }

  guardar(form:NgForm){
    this.usuarioService.insertarUsuario(this.usuario).subscribe(
      (data:any)=>{

        form.reset();
      },(error)=>{
        console.log('No se pudo guardar el usuario', error);
      }
      
    )
  }

}
