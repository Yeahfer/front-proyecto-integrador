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
  selector: 'app-creacion-materias',
  templateUrl: './creacion-materias.component.html',
  styleUrls: ['./creacion-materias.component.css']
})
export class CreacionMateriasComponent implements OnInit {

  myform: FormGroup;
  materia: FormControl;

  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.courses.createCourseS"
  apiTemas: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.tema.CreateTema"
  apiArea: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.areas.CreateArea"
  apiEscuela : string =  "http://localhost:3000/api/mx.itesm.gradeexchanger.schools.School"

  data: string;
  dataTema: string;
  dataArea: string;
  dataEscuela : string;

  registroMateria: string;
  registroTema1: string;
  registroTema2: string;
  registroTema3: string;
  registroTema4: string;
  registroTema5: string;
  registroArea: string;
  registroEscuela : string;

onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");
    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.courses.createCourseS", "courseId": id, "name": this.registroMateria, "units" : 23, "period" : "this.periodo", "temaId": [this.registroTema1, this.registroTema2, this.registroTema3, this.registroTema4, this.registroTema5], "areaId" : this.registroArea, "schoolId": this.registroEscuela }).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}

  ngOnInit() {

  	let url2 = `${this.apiTemas}`;
	this.http.get(url2).subscribe(res => this.dataTema=res.text());

  	let url3 = `${this.apiArea}`;
	this.http.get(url3).subscribe(res => this.dataArea=res.text());


    let url4 = `${this.apiEscuela}`;
  this.http.get(url4).subscribe(res => this.dataEscuela=res.text());

	console.log(this.dataArea);

	this.registroTema1 = "-1";
	this.registroTema2 = "-1";
	this.registroTema3 = "-1";
	this.registroTema4 = "-1";
	this.registroTema5 = "-1";

	this.registroArea = "-1";
  this.registroEscuela = "-1";
  }


  constructor(private http: Http, public fb: FormBuilder) { 
    this.myform = this.fb.group({
      materia: ['',[Validators.required, Validators.minLength(4)]],
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

  hack4(){

    if(this.dataEscuela != undefined){
      return JSON.parse(this.dataEscuela);
    }
    return [];
  }

  hack3(){

    if(this.dataArea != undefined){
      return JSON.parse(this.dataArea);
    }
    return [];
  }

  hack2(){

    if(this.dataTema != undefined){
      return JSON.parse(this.dataTema);
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
