import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AdministradorServiciosComponent } from './components/administrador-servicios/administrador-servicios.component';
import { AdminServiciosPrestadosComponent } from './components/admin-servicios-prestados/admin-servicios-prestados.component';
import { InsertarServicioComponent } from './components/insertar-servicio/insertar-servicio.component';
import { InsertarUsuarioComponent } from './components/insertar-usuario/insertar-usuario.component';
import { PrestarServicioComponent } from './components/prestar-servicio/prestar-servicio.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full',
  },
  {
    path:'administrador_servicios',
    component:AdministradorServiciosComponent,
    pathMatch:'full'
  },
  {
    path:'administrador_servicios/insertar',
    component:InsertarServicioComponent,
    pathMatch:'full'
  },
  {
    path:'administrador_servicios_prestados',
    component:AdminServiciosPrestadosComponent,
    pathMatch:'full'
  },
  {
    path:'administrador_servicios_prestados/insertar_usuario',
    component:InsertarUsuarioComponent,
    pathMatch:'full'
  },
  {
    path:'administrador_servicios_prestados/prestar_servicio',
    component:PrestarServicioComponent,
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
