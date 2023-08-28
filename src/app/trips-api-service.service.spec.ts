import { TestBed } from '@angular/core/testing';

import { TripsApiServiceService } from './trips-api-service.service';

describe('TripsApiServiceService', () => {
  let service: TripsApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TripsApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
