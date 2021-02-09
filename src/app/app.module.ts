/***MODULES***/
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
/****MATERIALS ANIMATION ROUTING AND FORMS*****/
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from "./material/material.module";
import {ReactiveFormsModule} from '@angular/forms'
import { RouterModule } from "@angular/router";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./service/token.interceptor.service";
// import { NgxYoutubePlayerModule } from "ngx-youtube-player";
// import { YouTubePlayerModule } from "@angular/youtube-player";
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
import { ProfesoradoComponent } from './components/profesorado/profesorado.component';
import { VistaReportesComponent } from './components/vista-reportes/vista-reportes.component';
import { MateriasComponent } from "./components/materias/materias.component";
import { VistaEventosComponent } from './components/vista-eventos/vista-eventos.component';
import { EventoComponent } from './components/evento/evento.component';
import { EventoCompletoComponent } from './components/evento-completo/evento-completo.component';
import { SearchComponent } from './components/search/search.component';
import { RepresentanteComponent } from './components/representante/representante.component';
import { RepresViewComponent } from './components/repres-view/repres-view.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';


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
    CapitalizadoPipe,
    ProfesoradoComponent,
    VistaReportesComponent,
    MateriasComponent,
    VistaEventosComponent,
    EventoComponent,
    EventoCompletoComponent,
    SearchComponent,
    RepresentanteComponent,
    RepresViewComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    // NgxYoutubePlayerModule,
    // YouTubePlayerModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [AuthGuard, 
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
