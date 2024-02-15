import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InsertarServicioComponent } from './components/insertar-servicio/insertar-servicio.component';
import { HomeComponent } from './components/home/home.component';
import { AdministradorServiciosComponent } from './components/administrador-servicios/administrador-servicios.component';
import { AdminServiciosPrestadosComponent } from './components/admin-servicios-prestados/admin-servicios-prestados.component';
import { PrestarServicioComponent } from './components/prestar-servicio/prestar-servicio.component';
import { InsertarUsuarioComponent } from './components/insertar-usuario/insertar-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertarServicioComponent,
    HomeComponent,
    AdministradorServiciosComponent,
    AdminServiciosPrestadosComponent,
    PrestarServicioComponent,
    InsertarUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
