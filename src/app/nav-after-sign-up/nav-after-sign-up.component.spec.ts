import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavAfterSignUpComponent } from './nav-after-sign-up.component';

describe('NavAfterSignUpComponent', () => {
  let component: NavAfterSignUpComponent;
  let fixture: ComponentFixture<NavAfterSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavAfterSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavAfterSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
