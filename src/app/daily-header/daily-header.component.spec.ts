import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyHeaderComponent } from './daily-header.component';

describe('DailyHeaderComponent', () => {
  let component: DailyHeaderComponent;
  let fixture: ComponentFixture<DailyHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailyHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
