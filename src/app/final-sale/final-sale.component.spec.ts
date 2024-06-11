import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalSaleComponent } from './final-sale.component';

describe('FinalSaleComponent', () => {
  let component: FinalSaleComponent;
  let fixture: ComponentFixture<FinalSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalSaleComponent]
    });
    fixture = TestBed.createComponent(FinalSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
