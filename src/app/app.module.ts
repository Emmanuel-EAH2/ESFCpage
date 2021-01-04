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
import { LoginComponent } from './components/login/login.component';
import { CoordinadoresComponent } from './components/coordinadores/coordinadores.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { AlumnadoComponent } from './components/alumnado/alumnado.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    CoordinadoresComponent,
    AlumnosComponent,
    ProfesoresComponent,
    EventosComponent,
    AlumnadoComponent
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
