import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalesalesdetailComponent } from './finalesalesdetail.component';

describe('FinalesalesdetailComponent', () => {
  let component: FinalesalesdetailComponent;
  let fixture: ComponentFixture<FinalesalesdetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FinalesalesdetailComponent]
    });
    fixture = TestBed.createComponent(FinalesalesdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
