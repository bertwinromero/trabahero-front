import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLocationComponent } from './task-location.component';

describe('TaskLocationComponent', () => {
  let component: TaskLocationComponent;
  let fixture: ComponentFixture<TaskLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
