import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesDetailComponent } from './sales-detail.component';

describe('SalesDetailComponent', () => {
  let component: SalesDetailComponent;
  let fixture: ComponentFixture<SalesDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalesDetailComponent]
    });
    fixture = TestBed.createComponent(SalesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
