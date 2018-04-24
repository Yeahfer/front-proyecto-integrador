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
  selector: 'app-creacion-temas',
  templateUrl: './creacion-temas.component.html',
  styleUrls: ['./creacion-temas.component.css']
})
export class CreacionTemasComponent implements OnInit {

  myform: FormGroup;
  tema: FormControl;
  apiRoot: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.tema.CreateTema"
  data: string;
  registroTema:string;

onSubmit() {

  var id = Math.floor(Math.random() * 10000) + 1 ;

  if (this.myform.valid) {
    console.log("Form Submitted!");

    let url = `${this.apiRoot}`;
    this.http.post(url, {"$class": "mx.itesm.gradeexchanger.tema.CreateTema", "temaId": id, "name": this.registroTema }).subscribe(res => console.log(res.json()));

    this.myform.reset();

  }
}

  ngOnInit() {

  }

  constructor(private http: Http, public fb: FormBuilder) { 
    this.myform = this.fb.group({
      tema: ['',[Validators.required, Validators.minLength(4)]],
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
