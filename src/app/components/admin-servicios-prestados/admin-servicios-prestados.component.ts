import { Component, OnInit } from '@angular/core';
import { ServicioPrestado } from 'src/app/Entities/servicioPrestado';
import { ServicioPrestadoService } from 'src/app/services/servicio-prestado.service';

@Component({
  selector: 'app-admin-servicios-prestados',
  templateUrl: './admin-servicios-prestados.component.html',
  styleUrls: ['./admin-servicios-prestados.component.css']
})
export class AdminServiciosPrestadosComponent implements OnInit{

  ngOnInit(): void {
    this.listar();
  }

  cadena!:String;

  serviciosPrestados:ServicioPrestado[]=[];

  constructor(private servicioPrestadoService:ServicioPrestadoService){

  }

  listar(){
      this.servicioPrestadoService.listarServiciosPrestados().subscribe(
        (data:any)=>{
          this.serviciosPrestados=data;
        },
        (error)=>{
          console.error('Ha ocurrido un error:', error);
        }
      )
  }

  

}
