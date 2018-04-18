import { Component, OnInit, Inject } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {    ReactiveFormsModule,
            FormsModule,
            FormGroup,
            FormControl,
            Validators,
            FormBuilder
        } from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


@Component({
  selector: 'revalidar',
  templateUrl: './revalidar.component.html',
  styleUrls: ['./revalidar.component.css']
})
export class RevalidarComponent implements OnInit {

  myform: FormGroup;
  alumno: FormControl;
  periodo: FormControl;
  calificacion: FormControl;


  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.students.AssignCourse"
  apiEscuela: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.schools.School"
  apiCurso: string  = "http://localhost:3000/api/mx.itesm.gradeexchanger.courses.createCourseS"
  apiCursoExtranjero: string  = "http://localhost:3000/api/mx.itesm.gradeexchanger.courses.createCourseS"

  data: string;
  dataEscuela: string;
  dataCursoExtranjero: string;
  dataCurso: string;

  registroCurso:string;
  registroCursoExtranjero:string;
  registroAlumno:string;
  registroPeriodo:string;
  registroExtranjera:string;
  registroCalificacion:string;

onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");

    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.students.AssignCourseCurrent", "courseId": this.registroCurso, "studentId": this.registroAlumno, "period": this.registroPeriodo,"grade": this.registroCalificacion, "escuelaExterna": this.registroExtranjera, "courseIdExterna":this.registroCursoExtranjero }).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    let url2 = `${this.apiCursoExtranjero}`;
    this.http.get(url2).subscribe(res => this.dataCursoExtranjero=res.text());

    let url3 = `${this.apiEscuela}`;
    this.http.get(url3).subscribe(res => this.dataEscuela=res.text());

    let url4 = `${this.apiCurso}`;
    this.http.get(url4).subscribe(res => this.dataCurso=res.text());

    console.log(this.dataCurso);

    this.registroCursoExtranjero="-1";
    this.registroExtranjera="-1";
    this.registroCurso="-1";

  }


  constructor(private http: Http) {

  }


  doPOST() {
    console.log("POST");
    console.log(this.data);

  }
  
  doGET() {
	  console.log("GET");
	  let url = `${this.apiRoot}`;
	  this.http.get(url).subscribe(res => this.data=res.text());
  }


  hack4(){

    if(this.dataEscuela != undefined){
      return JSON.parse(this.dataEscuela);
    }
    return [];
  }


  hack3(){

    if(this.dataCurso != undefined){
      return JSON.parse(this.dataCurso);
    }
    return [];
  }

  hack2(){

    if(this.dataCursoExtranjero != undefined){
      return JSON.parse(this.dataCursoExtranjero);
    }
    return [];
  }

  hack(){

    if(this.data != undefined){
      return JSON.parse(this.data);
    }
    return [];
  }

  createFormControls() {
    this.alumno = new FormControl('', Validators.required);
    this.periodo = new FormControl('', Validators.required);
    this.calificacion = new FormControl('', Validators.required);

  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        alumno : this.alumno,
        periodo: this.periodo,
        calificacion: this.calificacion,
      }),
    });
  }

