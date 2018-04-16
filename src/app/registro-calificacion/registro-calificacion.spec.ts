import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroCalificacion } from './registro-calificacion';

describe('RegistroCalificacion', () => {
  let component: RegistroCalificacion;
  let fixture: ComponentFixture<RegistroCalificacion>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroCalificacion ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroCalificacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
