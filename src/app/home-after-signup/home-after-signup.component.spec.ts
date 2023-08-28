import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAfterSignupComponent } from './home-after-signup.component';

describe('HomeAfterSignupComponent', () => {
  let component: HomeAfterSignupComponent;
  let fixture: ComponentFixture<HomeAfterSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAfterSignupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAfterSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
