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
  selector: 'app-registro-carrera',
  templateUrl: './registro-carrera.component.html',
  styleUrls: ['./registro-carrera.component.css']
})
export class RegistroCarreraComponent implements OnInit {

  myform: FormGroup;
  carrera: FormControl;
  unidades: FormControl;
  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.career.CreateCareer"
  data: string;
  nombreCarrera:string;
  unidadesCarrera:string;

	onSubmit() {

	  var id = Math.floor(Math.random() * 10000) + 1 ;

	  if (this.myform.valid) {
	    console.log(this.nombreCarrera);
      console.log(this.unidadesCarrera);
	    console.log("Form Submitted!");

	    let url = `${this.apiRoot}`;
	    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.career.CreateCareer","careerId": id ,"name": this.nombreCarrera, "units": this.unidadesCarrera }).subscribe(res => console.log(res.json()));

      this.myform.reset();

	  }
	}

  ngOnInit() {

  }

  constructor(private http: Http, public fb: FormBuilder) { 
    this.myform = this.fb.group({
      carrera: ['',[Validators.required, Validators.minLength(4)]],
      unidades: ['',[Validators.required]],
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
