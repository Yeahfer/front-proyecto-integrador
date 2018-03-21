import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreacionTemasComponent } from './creacion-temas.component';

describe('CreacionTemasComponent', () => {
  let component: CreacionTemasComponent;
  let fixture: ComponentFixture<CreacionTemasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreacionTemasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionTemasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
