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
  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.career.CreateCareer"
  data: [];
  id:int; 

	onSubmit() {

	  this.id = Math.floor(Math.random() * 10000) + 1 ;

	  if (this.myform.valid) {
	    console.log(this.registroArea);
	    console.log("Form Submitted!");

	    let url = `${this.apiRoot}`;
	    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.career.CreateCareer","careerId": this.id ,"name": this.nombreCarrera, "units": 432 }).subscribe(res => console.log(res.json()));
	  }
	}

  ngOnInit() {
    this.createFormControls();
    this.createForm();
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


  hack(){

    var obj = JSON.parse(this.data);
    for (var i = 0, len = obj.length; i < len; i++){      
      console.log(obj[i]);
    }

    return obj;
  }

  createFormControls() {
    this.area = new FormControl('', Validators.required);
  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        carrera: this.area
      })
  }

}
