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
  registroAlumno: string;
  
  @ViewChild('f') formVariable: NgForm;
  constructor(private http: Http) { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();

  }

 hack(){

    if(this.data != undefined){
      return JSON.parse(this.data);
    }
    return [];
  }



  onSubmit() {

    console.log("GET");
    let url2 = "http://localhost:3000/api/mx.itesm.gradeexchanger.students.AssignCourse/"+this.registroAlumno;
    this.http.get(url2).subscribe(res => this.data=res.text());
    console.log(this.registroAlumno)

  }

  createFormControls() {
    this.alumno = new FormControl('', Validators.required);

  }

  createForm() {
    this.myform = new FormGroup({
      name: new FormGroup({
        alumno : this.alumno
      }),
    });
  }

}
