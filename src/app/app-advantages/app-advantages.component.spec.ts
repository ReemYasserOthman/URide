import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppAdvantagesComponent } from './app-advantages.component';

describe('AppAdvantagesComponent', () => {
  let component: AppAdvantagesComponent;
  let fixture: ComponentFixture<AppAdvantagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppAdvantagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppAdvantagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
