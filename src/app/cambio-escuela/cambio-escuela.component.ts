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
  selector: 'app-cambio-escuela',
  templateUrl: './cambio-escuela.component.html',
  styleUrls: ['./cambio-escuela.component.css']
})
export class CambioEscuelaComponent implements OnInit {

  myform: FormGroup;
  matricula: FormControl;

  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.students.RevalidateCourse"
  apiEscuela: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.schools.CreateSchool"

  data: string;
  dataEscuela: string;
  dataCurso: string;
  dataCursoNuevo: string;
  dataAlumno: string;

  registroAlumno: string;
  registroEscuela: string;
  registroCurso: string;
  registroCursoNuevo: string;



onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");
    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.students.RevalidateCourse", "courseId": this.registroCurso, "courseIdNuevo": this.registroCursoNuevo,"studentId": this.registroAlumno, "newSchool": this.registroEscuela}).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}

  ngOnInit() {
    this.createFormControls();
    this.createForm();

    let url3 = `${this.apiEscuela}`;
    this.http.get(url3).subscribe(res => this.dataEscuela=res.text());

    this.registroEscuela = "-1";
    this.registroCurso= "-1";
    this.registroCursoNuevo="-1";
  }


  constructor(private http: Http) {

  }

  onChange() {

      console.log(this.registroEscuela);

      this.http.get("http://localhost:3000/api/queries/CursosConEscuela?school_id=resource%3Amx.itesm.gradeexchanger.schools.School%23"+this.registroEscuela).subscribe(res => this.dataCursoNuevo=res.text());


      this.http.get("http://localhost:3000/api/mx.itesm.gradeexchanger.students.Student/"+this.matricula.value).subscribe(res => this.dataAlumno=res.text());


  }

  onChange2(){


    console.log((JSON.parse(this.dataAlumno).school).split('#')[1]);   

    this.http.get("http://localhost:3000/api/queries/CursosConEscuela?school_id=resource%3Amx.itesm.gradeexchanger.schools.School%23"+(JSON.parse(this.dataAlumno).school).split('#')[1]).subscribe(res => this.dataCurso=res.text());

    this.http.post("http://localhost:3000/api/mx.itesm.gradeexchanger.students.AssignSchool", {"$class": "mx.itesm.gradeexchanger.students.AssignSchool", "schoolId": this.registroEscuela, "studentId": this.matricula.value}).subscribe(res => console.log(res.json()));

  }

  doPOST() {
    console.log("POST");
    console.log(this.data);

  }
  
  doGET() {

      console.log("GET");
	  let url = `${this.apiRoot}`;
	  this.http.get(url).subscribe(res => this.data=res.text());

	  console.log(this.data);


  }

  hack5(){

    if(this.dataCursoNuevo != undefined){
      return JSON.parse(this.dataCursoNuevo);
    }
    return [];
  }

  hack4(){

    if(this.dataCurso != undefined){
      return JSON.parse(this.dataCurso);
    }
    return [];
  }


  hack3(){

    if(this.dataEscuela != undefined){
      return JSON.parse(this.dataEscuela);
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
    this.matricula = new FormControl('', Validators.required);

  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        matricula: this.matricula,
    	}),
    });
  }

}
