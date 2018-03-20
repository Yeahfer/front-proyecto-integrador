import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-calificaciones-alumnos',
  templateUrl: './calificaciones-alumnos.component.html',
  styleUrls: ['./calificaciones-alumnos.component.css']
})
export class CalificacionesAlumnosComponent implements OnInit {
    @ViewChild('f') formVariable: NgForm;
  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
      console.log(this.formVariable);
  }

}
