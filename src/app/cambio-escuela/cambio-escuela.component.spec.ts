import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioEscuelaComponent } from './cambio-escuela.component';

describe('CambioEscuelaComponent', () => {
  let component: CambioEscuelaComponent;
  let fixture: ComponentFixture<CambioEscuelaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioEscuelaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioEscuelaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
