import { TestBed } from '@angular/core/testing';

import { AngularSchedulesCalendarService } from './angular-schedules-calendar.service';

describe('AngularSchedulesCalendarService', () => {
  let service: AngularSchedulesCalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularSchedulesCalendarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
