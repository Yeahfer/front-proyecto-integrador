import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RevalidarComponent } from './revalidar.component';

describe('RevalidarComponent', () => {
  let component: RevalidarComponent;
  let fixture: ComponentFixture<RevalidarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RevalidarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RevalidarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
