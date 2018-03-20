import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalificacionesAlumnosComponent } from './calificaciones-alumnos.component';

describe('CalificacionesAlumnosComponent', () => {
  let component: CalificacionesAlumnosComponent;
  let fixture: ComponentFixture<CalificacionesAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalificacionesAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalificacionesAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
