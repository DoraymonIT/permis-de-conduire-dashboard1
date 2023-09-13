import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyExamDetailsComponent } from './my-exam-details.component';

describe('MyExamDetailsComponent', () => {
  let component: MyExamDetailsComponent;
  let fixture: ComponentFixture<MyExamDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyExamDetailsComponent]
    });
    fixture = TestBed.createComponent(MyExamDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
