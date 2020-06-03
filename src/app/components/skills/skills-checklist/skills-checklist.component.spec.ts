import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsChecklistComponent } from './skills-checklist.component';

describe('SkillsChecklistComponent', () => {
  let component: SkillsChecklistComponent;
  let fixture: ComponentFixture<SkillsChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillsChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillsChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
