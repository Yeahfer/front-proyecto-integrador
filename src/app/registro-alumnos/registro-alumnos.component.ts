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
  selector: 'app-registro-alumnos',
  templateUrl: './registro-alumnos.component.html',
  styleUrls: ['./registro-alumnos.component.css']
})
export class RegistroAlumnosComponent implements OnInit {

  myform: FormGroup;
  matricula: FormControl;
  nombre: FormControl;
  apellido: FormControl;

  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.students.CreateStudent"
  apiCarrera: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.career.CreateCareer"
  apiEscuela: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.schools.CreateSchool"

  data: string;
  dataCarrera: string;
  dataEscuela: string;

  registroAlumno: string;
  registroNombre: string;
  registroApellido: string;
  registroCarrera: string;
  registroEscuela: string;


onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");
    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.students.CreateStudent", "studentId": this.registroAlumno,   "firstName": this.registroNombre, "lastName": this.registroApellido, "careerId": this.registroCarrera, "schoolId" : this.registroEscuela}).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}

  ngOnInit() {

  	let url2 = `${this.apiCarrera}`;
	  this.http.get(url2).subscribe(res => this.dataCarrera=res.text());


    let url3 = `${this.apiEscuela}`;
    this.http.get(url3).subscribe(res => this.dataEscuela=res.text());

	  console.log(this.dataEscuela);

	  this.registroCarrera = "-1";
    this.registroEscuela = "-1";
  }


  constructor(private http: Http, public fb: FormBuilder) { 
    this.myform = this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(4)]],
      nombre: ['',[Validators.required, Validators.minLength(2), Validators.pattern(/^([a-zA-Z ]+)$/)]],
      apellido: ['',[Validators.required, Validators.minLength(2), Validators.pattern(/^([a-zA-Z ]+)$/)]],
    });
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

  hack3(){

    if(this.dataEscuela != undefined){
      return JSON.parse(this.dataEscuela);
    }
    return [];
  }


  hack2(){

    if(this.dataCarrera != undefined){
      return JSON.parse(this.dataCarrera);
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
