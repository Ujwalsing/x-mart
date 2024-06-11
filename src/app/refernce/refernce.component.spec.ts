import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefernceComponent } from './refernce.component';

describe('RefernceComponent', () => {
  let component: RefernceComponent;
  let fixture: ComponentFixture<RefernceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RefernceComponent]
    });
    fixture = TestBed.createComponent(RefernceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
