import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroArea } from './registro-area';

describe('RegistroArea', () => {
  let component: RegistroArea;
  let fixture: ComponentFixture<RegistroArea>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroArea ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroArea);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
