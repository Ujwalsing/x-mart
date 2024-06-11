import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedesign2Component } from './homedesign2.component';

describe('Homedesign2Component', () => {
  let component: Homedesign2Component;
  let fixture: ComponentFixture<Homedesign2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homedesign2Component]
    });
    fixture = TestBed.createComponent(Homedesign2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
