import { Component } from '@angular/core';
import { ServicioDto } from 'src/app/Entities/servicioDto';

@Component({
  selector: 'app-prestar-servicio',
  templateUrl: './prestar-servicio.component.html',
  styleUrls: ['./prestar-servicio.component.css']
})
export class PrestarServicioComponent {

  serviciosDto:ServicioDto[]=[]

  

  servicioPrestado={
    usuario:'',
    servicio:'',
    servicioId:''
  }

}
