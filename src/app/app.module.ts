/***MODULES***/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
/****MATERIALS ANIMATION ROUTING AND FORMS*****/
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import {ReactiveFormsModule} from '@angular/forms'
/***COMPONENTS***/
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { CoordinadoresComponent } from './components/coordinadores/coordinadores.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AlumnadoComponent } from './components/alumnado/alumnado.component';
import { ReportesSabatinosComponent } from './components/reportes-sabatinos/reportes-sabatinos.component';
import { CapitalizadoPipe } from './pipe/capitalizado.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CoordinadoresComponent,
    AlumnosComponent,
    ProfesoresComponent,
    EventosComponent,
    AlumnadoComponent,
    ReportesSabatinosComponent,
    CapitalizadoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
