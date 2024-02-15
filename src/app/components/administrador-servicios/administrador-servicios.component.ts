import { Component, OnInit } from '@angular/core';
import { servicio } from 'src/app/Entities/servicio';
import { ServicioService } from 'src/app/services/servicio.service';
import { RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-administrador-servicios',
  templateUrl: './administrador-servicios.component.html',
  styleUrls: ['./administrador-servicios.component.css']
})
export class AdministradorServiciosComponent implements OnInit{

  ngOnInit(): void {
    this.listar();
  }

  constructor(private servicioService:ServicioService){}



  servicios:servicio[]=[];

  servicioData={
    idCodigoServicio:'',
    codigoServicio: '',
    nombreServicio: '',
    codigoTipoServicio: ''
  }

  cadena!:String;

formularioOculto:Boolean=true;

  listar(){
    this.cadena='';
      this.servicioService.listarServicios().subscribe(
        (data:any)=>{
          this.servicios=data;
        },
        (error)=>{
          console.error('Ha ocurrido un error:', error);
        }
      )
  }

  buscar(){
    this.servicioService.buscarServicio(this.cadena).subscribe(
      (data:any)=>{
        this.servicios=data;
      },(error)=>{
        console.log('Ha ocurrido un error', error);
      }
    )
  }

  eliminar(idCodigoServicio:any){
    this.servicioService.eliminarServicio(idCodigoServicio).subscribe(
      (data:any)=>{
        this.servicios.pop();
        window.location.reload();
      },(error)=>{
        console.error('No se ha podido eliminar', error);
      }
    )
  }

  traerDatos(servicioData:{idCodigoServicio:any, codigoServicio:any, nombreServicio:any, codigoTipoServicio:any}){
    this.servicioData.idCodigoServicio=servicioData.idCodigoServicio;
    this.servicioData.codigoServicio=servicioData.codigoServicio;
    this.servicioData.nombreServicio=servicioData.nombreServicio;
    this.servicioData.codigoTipoServicio=servicioData.codigoTipoServicio;
  }
  editar(srvi:any){
    this.servicioService.actualizarServicio(srvi).subscribe(
      (data:any)=>{
        this.servicioData=data;
        window.location.reload();

      },(error)=>{
        console.error('No se pudo actualizar', error);
      }
    )

  }
}

