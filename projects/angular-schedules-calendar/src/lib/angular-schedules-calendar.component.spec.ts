import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularSchedulesCalendarComponent } from './angular-schedules-calendar.component';

describe('AngularSchedulesCalendarComponent', () => {
  let component: AngularSchedulesCalendarComponent;
  let fixture: ComponentFixture<AngularSchedulesCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AngularSchedulesCalendarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularSchedulesCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
