import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionMateriasComponent } from './creacion-materias.component';

describe('CreacionMateriasComponent', () => {
  let component: CreacionMateriasComponent;
  let fixture: ComponentFixture<CreacionMateriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionMateriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionMateriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
