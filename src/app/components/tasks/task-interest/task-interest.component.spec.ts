import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskInterestComponent } from './task-interest.component';

describe('TaskInterestComponent', () => {
  let component: TaskInterestComponent;
  let fixture: ComponentFixture<TaskInterestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskInterestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskInterestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
