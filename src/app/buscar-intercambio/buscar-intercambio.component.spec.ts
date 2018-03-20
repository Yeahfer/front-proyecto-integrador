import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarIntercambioComponent } from './buscar-intercambio.component';

describe('BuscarIntercambioComponent', () => {
  let component: BuscarIntercambioComponent;
  let fixture: ComponentFixture<BuscarIntercambioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarIntercambioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarIntercambioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
