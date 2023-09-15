import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayTheExamComponent } from './pay-the-exam.component';

describe('PayTheExamComponent', () => {
  let component: PayTheExamComponent;
  let fixture: ComponentFixture<PayTheExamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PayTheExamComponent]
    });
    fixture = TestBed.createComponent(PayTheExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
