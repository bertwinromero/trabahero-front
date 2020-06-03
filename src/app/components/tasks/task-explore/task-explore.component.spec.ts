import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskExploreComponent } from './task-explore.component';

describe('TaskExploreComponent', () => {
  let component: TaskExploreComponent;
  let fixture: ComponentFixture<TaskExploreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaskExploreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskExploreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
