import {Component, OnInit, ViewChild, Inject} from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import {    ReactiveFormsModule,
            FormsModule,
            FormGroup,
            FormControl,
            Validators,
            FormBuilder,
            NgForm
        } from '@angular/forms';

import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app-calificaciones-alumnos',
  templateUrl: './calificaciones-alumnos.component.html',
  styleUrls: ['./calificaciones-alumnos.component.css']
})
export class CalificacionesAlumnosComponent implements OnInit {

  myform: FormGroup;
  alumno: FormControl;

  data: string;
  dataCurso: string;

  registroAlumno: string;
  
  apiNombres: string = "http://localhost:3000/api/mx.itesm.gradeexchanger.courses.Course"

  @ViewChild('f') formVariable: NgForm;
  constructor(private http: Http,  public fb: FormBuilder) { 
    this.myform = this.fb.group({
      matricula: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9),
                       Validators.pattern(/^([aA]0)([0-9]+){7}$/)]],
    });
  }

  ngOnInit() {

    let url2 = `${this.apiNombres}`;
    this.http.get(url2).subscribe(res => this.dataCurso=res.text());


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



  onSubmit() {

    console.log("GET");
    let url2 = "http://localhost:3000/api/mx.itesm.gradeexchanger.students.Student/"+this.registroAlumno;
    this.http.get(url2).subscribe(res => this.data="["+res.text()+"]");
    this.myform.reset();

    

  }

}
