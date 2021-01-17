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


const routes: Routes = [
  {path: 'createCoordinador', component: CoordinadoresComponent},
  {path: 'coordinacion', component: CoordinacionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'reportesView', component: VistaReportesComponent},
  {path: 'profesoresView', component: ProfesoradoComponent},
  {path: 'alumno', component: AlumnosComponent},
  {path: 'alumnos', component: AlumnadoComponent},
  {path: 'reportes', component: ReportesSabatinosComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'evento-completo/:id', component: EventoCompletoComponent},
  {path: 'eventosView', component: VistaEventosComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
