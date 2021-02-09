import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnadoComponent } from './components/alumnado/alumnado.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CoordinacionComponent } from './components/coordinacion/coordinacion.component';
import { CoordinadoresComponent } from './components/coordinadores/coordinadores.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ReportesSabatinosComponent } from './components/reportes-sabatinos/reportes-sabatinos.component';
import { ProfesoradoComponent } from './components/profesorado/profesorado.component';
import { VistaReportesComponent } from './components/vista-reportes/vista-reportes.component';
import { VistaEventosComponent } from './components/vista-eventos/vista-eventos.component';
import { EventoComponent } from './components/evento/evento.component';
import { EventoCompletoComponent } from './components/evento-completo/evento-completo.component';
import { SearchComponent } from './components/search/search.component';
import { RepresentanteComponent } from './components/representante/representante.component';
import { RepresViewComponent } from './components/repres-view/repres-view.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from "./auth.guard";

const routes: Routes = [
  {path: 'createSecu', component: RegisterComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'coordinacion', component: CoordinacionComponent, canActivate: [AuthGuard]},
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
  {path: 'reportesView', component: VistaReportesComponent, canActivate: [AuthGuard]},
  {path: 'profesoresView', component: ProfesoradoComponent, canActivate: [AuthGuard]},
  {path: 'alumno', component: AlumnosComponent, canActivate: [AuthGuard]},
  {path: 'alumnos', component: AlumnadoComponent, canActivate: [AuthGuard]},
  {path: 'reportes', component: ReportesSabatinosComponent, canActivate: [AuthGuard]},
  {path: 'eventos', component: EventosComponent, canActivate: [AuthGuard]},
  {path: 'evento-completo/:id', component: EventoCompletoComponent, canActivate: [AuthGuard]},
  {path: 'eventosView', component: VistaEventosComponent, canActivate: [AuthGuard]},
  {path: 'materias', component: MateriasComponent, canActivate: [AuthGuard]},
  {path: 'profesores', component: ProfesoresComponent, canActivate: [AuthGuard]},
  {path: 'results/:termino', component: SearchComponent, canActivate: [AuthGuard]},
  {path: 'representantes', component: RepresentanteComponent, canActivate: [AuthGuard]},
  {path: 'represView', component: RepresViewComponent, canActivate: [AuthGuard]},
  {path: '', pathMatch: 'full', redirectTo: 'login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
