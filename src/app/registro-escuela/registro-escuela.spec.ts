import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroEscuela } from './registro-escuela';

describe('RegistroEscuela', () => {
  let component: RegistroEscuela;
  let fixture: ComponentFixture<RegistroEscuela>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroEscuela ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroEscuela);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
