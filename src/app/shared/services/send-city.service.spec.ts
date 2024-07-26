import { TestBed } from '@angular/core/testing';

import { SendCityService } from './send-city.service';

describe('SendCityService', () => {
  let service: SendCityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SendCityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
