import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Homedesign1Component } from './homedesign1.component';

describe('Homedesign1Component', () => {
  let component: Homedesign1Component;
  let fixture: ComponentFixture<Homedesign1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Homedesign1Component]
    });
    fixture = TestBed.createComponent(Homedesign1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
