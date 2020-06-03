import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskUsersComponent } from './task-users.component';

describe('TaskUsersComponent', () => {
  let component: TaskUsersComponent;
  let fixture: ComponentFixture<TaskUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
