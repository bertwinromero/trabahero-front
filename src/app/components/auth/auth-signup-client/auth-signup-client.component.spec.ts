import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthSignupClientComponent } from './auth-signup-client.component';

describe('AuthSignupClientComponent', () => {
  let component: AuthSignupClientComponent;
  let fixture: ComponentFixture<AuthSignupClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthSignupClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthSignupClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
