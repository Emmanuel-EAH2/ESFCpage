import { Component, OnInit } from '@angular/core';
import { ReporteSabatinoService } from '../../service/reporte-sabatino.service';
import { AlumnosService } from '../../service/alumnos.service';
import { reporteSabatino } from "../../models/reporteSabatino";
import { NgForm } from '@angular/forms';
import {  ProfesService} from "../../service/profes.service";

@Component({
  selector: 'app-reportes-sabatinos',
  templateUrl: './reportes-sabatinos.component.html',
  styleUrls: ['./reportes-sabatinos.component.css']
})
export class ReportesSabatinosComponent implements OnInit {
  reporte: any;
  reporteNew: reporteSabatino = new reporteSabatino();
  alumnos: any;


   NombreDogma: any;
  MateriaDogma: any;
  HorarioDogmaI: any;
  HorarioDogmaII: any;
   
   NombreBibliaP: any;
  MateriaBibliaP: any;
  HorarioBibliaPI: any;
  HorarioBibliaPII: any;
   
   NombreBibliaS: any;
  MateriaBibliaS: any;
  HorarioBibliaSI: any;
  HorarioBibliaSII: any;
   
   NombreBibliaT: any;
  MateriaBibliaT: any;
  HorarioBibliaTI: any;
  HorarioBibliaTII: any;
   
   NombreLiturgaP: any;
  MateriaLiturgaP: any;
  HorarioLiturgaPI: any;
  HorarioLiturgaPII: any;
   
   NombreLiturgiaS: any;
  MateriaLiturgiaS: any;
  HorarioLiturgiaSI: any;
  HorarioLiturgiaSII: any;
   
   NombreMoralP: any;
  MateriaMoralP: any;
  HorarioMoralPI: any;
  HorarioMoralPII: any;
   
   NombreMoralS: any;
  MateriaMoralS: any;
  HorarioMoralSI: any;
  HorarioMoralSII: any;
   
   NombreMoralT: any;
  MateriaMoralT: any;
  HorarioMoralTI: any;
  HorarioMoralTII: any;
   
   NombreVozPapaP: any;
  MateriaVozPapaP: any;
  HorarioVozPapaPI: any;
  HorarioVozPapaPII: any;
   
   NombreVozPapaT: any;
  MateriaVozPapaT: any;
  HorarioVozPapaTI: any;
  HorarioVozPapaTII: any;
   
   NombreFormacion: any;
  MateriaFormacion: any;
  HorarioFormacionI: any;
  HorarioFormacionII: any;
   
   NombreOracion: any;
  MateriaOracion: any;
  HorarioOracionI: any;
  HorarioOracionII: any;
   
  constructor(private app: ReporteSabatinoService, private appAlum: AlumnosService, private appProf: ProfesService) { }

  ngOnInit(): void {
    // this.app.getData().then((data:any)=>{
    //   this.reporte = data;
    //   console.log(this.reporte);
    // }).catch((error)=>console.log(error));

    this.appProf.getDataSI().then((data:any)=>{
        this.reporte = data.Profes;
        /*******DOGA********/
        this.NombreDogma =   data.Profes[3]._id
        this.MateriaDogma  = data.Profes[3].materia
        this.HorarioDogmaI  =data.Profes[3].horarioClaseI
        this.HorarioDogmaII =data.Profes[3].horarioClaseII
        /*******BIBLIA UNO*******/
         this.NombreBibliaP = data.Profes[0]._id
        this.MateriaBibliaP  = data.Profes[0].materia
       this.HorarioBibliaPI  = data.Profes[0].horarioClaseI
      this.HorarioBibliaPII  = data.Profes[0].horarioClaseII
        /****Biblia dos*****/
        this.NombreBibliaS = data.Profes[1]._id
        this.MateriaBibliaS  = data.Profes[1].materia
        this.HorarioBibliaSI  = data.Profes[1].horarioClaseI
        this.HorarioBibliaSII  = data.Profes[1].horarioClaseII
        
        /********Biblia Tres*******/
        this.NombreBibliaT = data.Profes[2]._id
        this.MateriaBibliaT  = data.Profes[2].materia
        this.HorarioBibliaTI  = data.Profes[2].horarioClaseI
        this.HorarioBibliaTII  = data.Profes[2].horarioClaseII
        
        /********FORMACION DE DIRI******/
         this.NombreFormacion = data.Profes[4]._id
        this.MateriaFormacion  = data.Profes[4].materia
        this.HorarioFormacionI  = data.Profes[4].horarioClaseI
        this.HorarioFormacionII  = data.Profes[4].horarioClaseII
        /*********LITURGIA II***********/
         this.NombreLiturgiaS = data.Profes[6]._id
        this.MateriaLiturgiaS  = data.Profes[6].materia
        this.HorarioLiturgiaSI  = data.Profes[6].horarioClaseI
        this.HorarioLiturgiaSII  = data.Profes[6].horarioClaseII
        
        /***** LITURGIA I *****/
         this.NombreLiturgaP = data.Profes[5]._id
        this.MateriaLiturgaP  = data.Profes[5].materia
        this.HorarioLiturgaPI  = data.Profes[5].horarioClaseI
        this.HorarioLiturgaPII  = data.Profes[5].horarioClaseII
      /********** MORAL I**********/
        this.NombreMoralP = data.Profes[7]._id
        this.MateriaMoralP  = data.Profes[7].materia
        this.HorarioMoralPI  = data.Profes[7].horarioClaseI
        this.HorarioMoralPII  = data.Profes[7].horarioClaseII
        /*******MORAL II*********/
        this.NombreMoralS = data.Profes[8]._id
        this.MateriaMoralS  = data.Profes[8].materia
        this.HorarioMoralSI  = data.Profes[8].horarioClaseI
        this.HorarioMoralSII  = data.Profes[8].horarioClaseII
        /********MORAL III********/
        this.NombreMoralT = data.Profes[9]._id
        this.MateriaMoralT  = data.Profes[9].materia
        this.HorarioMoralTI  = data.Profes[9].horarioClaseI
        this.HorarioMoralTII  = data.Profes[9].horarioClaseII
        /********ORACION*******/
        this.NombreOracion = data.Profes[10]._id
        this.MateriaOracion  = data.Profes[10].materia
        this.HorarioOracionI  = data.Profes[10].horarioClaseI
        this.HorarioOracionII  = data.Profes[10].horarioClaseII
        /*******VOZ DEL PAPA********/
        this.NombreVozPapaP = data.Profes[11]._id
        this.MateriaVozPapaP  = data.Profes[11].materia
        this.HorarioVozPapaPI  = data.Profes[11].horarioClaseI
        this.HorarioVozPapaPII  = data.Profes[11].horarioClaseII
        /********VOZ DEL PAPA TRES*******/
        this.NombreVozPapaT = data.Profes[12]._id
        this.MateriaVozPapaT  = data.Profes[12].materia
        this.HorarioVozPapaTI  = data.Profes[12].horarioClaseI
        this.HorarioVozPapaTII  = data.Profes[12].horarioClaseII

        console.log(this.reporte);

      }).catch((error)=>console.log(error));


  }

  enviarReporte(form: NgForm){
    this.app.postData(this.reporteNew).then((data:any)=>{
      this.reporteNew = data
      console.log(this.reporteNew);
    }).catch((error)=>console.log(error));

  }
}
