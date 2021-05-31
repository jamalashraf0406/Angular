import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewQuesComponent } from './interview-ques.component';

describe('InterviewQuesComponent', () => {
  let component: InterviewQuesComponent;
  let fixture: ComponentFixture<InterviewQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
