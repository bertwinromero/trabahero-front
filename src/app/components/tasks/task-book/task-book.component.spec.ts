import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBookComponent } from './task-book.component';

describe('TaskBookComponent', () => {
  let component: TaskBookComponent;
  let fixture: ComponentFixture<TaskBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
