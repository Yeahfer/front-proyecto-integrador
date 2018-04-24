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
  selector: 'app-registro-area',
  templateUrl: './registro-area.html',
  styleUrls: ['./registro-area.css']
})
export class RegistroArea implements OnInit {

  myform: FormGroup;
  area: FormControl;
  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.areas.CreateArea"
  data: string;
  registroArea:string;

onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");

    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.areas.CreateArea", "areaId": id, "name": this.registroArea }).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}

  ngOnInit() {

  }


  constructor(private http: Http, public fb: FormBuilder) { 
    this.myform = this.fb.group({
      area: ['',[Validators.required, Validators.minLength(4)]],
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
