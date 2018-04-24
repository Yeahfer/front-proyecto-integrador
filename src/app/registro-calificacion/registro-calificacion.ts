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
  selector: 'app-registro-calificacion',
  templateUrl: './registro-calificacion.html',
  styleUrls: ['./registro-calificacion.css']
})
export class RegistroCalificacion implements OnInit {

  myform: FormGroup;
  alumno: FormControl;
  periodo: FormControl;
  calificacion: FormControl;


  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.students.AssignCourse"
  apiCurso: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.courses.createCourseS"
  
  data: string;
  dataAlumno : string;
  dataCurso: string;

  registroCurso:string;
  registroAlumno:string;
  registroPeriodo:string;
  registroCalificacion:string;

onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");

    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.students.AssignCourse", "courseId": this.registroCurso, "studentId": this.registroAlumno, "period": this.registroPeriodo, "grade": this.registroCalificacion}).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}




myMethod(){
  
  this.http.get("http://localhost:3000/api/mx.itesm.gradeexchanger.students.Student/"+this.alumno.value).subscribe(res => this.dataAlumno=res.text());  

}
  ngOnInit() {

    console.log(this.dataCurso);

    this.registroCurso="-1";

  }


  constructor(private http: Http, public fb: FormBuilder) { 
    this.myform = this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9),
                       Validators.pattern(/^([aA]0)([0-9]+){7}$/)]],
      periodo: ['', [Validators.required, Validators.minLength(4)]],
      calificacion: ['', [Validators.required]],
    });
  }


  doPOST() {
    console.log("POST");
    console.log(this.data);

  }
  
  doGET() {

      if(this.dataAlumno!=null){

        this.http.get("http://localhost:3000/api/queries/CursosConEscuela?school_id=resource%3Amx.itesm.gradeexchanger.schools.School%23"+(JSON.parse(this.dataAlumno).school).split('#')[1]).subscribe(res => this.dataCurso=res.text());
      }

  }

  hack2(){

    if(this.dataCurso != undefined){
      return JSON.parse(this.dataCurso);
    }
    return [];
  }

  hack(){

    if(this.data != undefined){
      return JSON.parse(this.data);
    }
    return [];
  }

}
