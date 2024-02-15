import { Component } from '@angular/core';
import { Form, FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ServicioService } from 'src/app/services/servicio.service';
@Component({
  selector: 'app-insertar-servicio',
  templateUrl: './insertar-servicio.component.html',
  styleUrls: ['./insertar-servicio.component.css']
})
export class InsertarServicioComponent {

  servicio={
    codigoServicio: '',
    nombreServicio: '',
    codigoTipoServicio: ''
  }

  

  constructor(private servicioService:ServicioService){

}


procesar(form:NgForm){
    this.servicioService.nuevoServicio(this.servicio).subscribe(
      (data:any)=>{
        this.servicio=data;
  
        form.reset();
  
      },
      (error)=>{
        console.error('Error al insertar el servicio:', error)
      }
    )
  }



}

