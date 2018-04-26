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
  selector: 'app-registro-escuela',
  templateUrl: './registro-escuela.html',
  styleUrls: ['./registro-escuela.css']
})
export class RegistroEscuela implements OnInit {

  myform: FormGroup;
  escuela: FormControl;
  min: FormControl;
  max: FormControl;

  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.schools.CreateSchool"
  data: string;

  registroEscuela:string;
  registroMin:string;
  registroMax:string;

onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");

    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.schools.CreateSchool", "schoolId": id, "name": this.registroEscuela, "minApprovedGrade": this.registroMin, "maxApprovedGrade": this.registroMax}).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}

  ngOnInit() {

  }


  constructor(private http: Http, public fb: FormBuilder) { 
    this.myform = this.fb.group({
      escuela: ['',[Validators.required, Validators.minLength(4)]],
      min: ['',[Validators.required, Validators.pattern(/^([0-9]+)$/)]],
      max: ['',[Validators.required, Validators.pattern(/^([0-9]+)$/)]],
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
  }


  hack(){

    if(this.data != undefined){
      return JSON.parse(this.data);
    }
    return [];
  }

}
