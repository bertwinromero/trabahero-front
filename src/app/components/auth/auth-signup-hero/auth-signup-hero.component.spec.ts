import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupHeroComponent } from './auth-signup-hero.component';

describe('AuthSignupHeroComponent', () => {
  let component: AuthSignupHeroComponent;
  let fixture: ComponentFixture<AuthSignupHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignupHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignupHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
