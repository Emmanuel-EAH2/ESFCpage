import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnadoComponent } from './components/alumnado/alumnado.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { CoordinacionComponent } from './components/coordinacion/coordinacion.component';
import { CoordinadoresComponent } from './components/coordinadores/coordinadores.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MateriasComponent } from './components/materias/materias.component';
import { ProfesoresComponent } from './components/profesores/profesores.component';
import { ReporteSabatinoComponent } from './components/reporte-sabatino/reporte-sabatino.component';

const routes: Routes = [
  {path: 'createCoordinador', component: CoordinadoresComponent},
  {path: 'coordinacion', component: CoordinacionComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'alumno', component: AlumnosComponent},
  {path: 'alumnos', component: AlumnadoComponent},
  {path: 'reportes', component: ReporteSabatinoComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'profesores', component: ProfesoresComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
