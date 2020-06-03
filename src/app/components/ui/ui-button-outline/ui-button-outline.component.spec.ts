import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiButtonOutlineComponent } from './ui-button-outline.component';

describe('UiButtonOutlineComponent', () => {
  let component: UiButtonOutlineComponent;
  let fixture: ComponentFixture<UiButtonOutlineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UiButtonOutlineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiButtonOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
