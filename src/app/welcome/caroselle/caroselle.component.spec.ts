import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaroselleComponent } from './caroselle.component';

describe('CaroselleComponent', () => {
  let component: CaroselleComponent;
  let fixture: ComponentFixture<CaroselleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaroselleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaroselleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
