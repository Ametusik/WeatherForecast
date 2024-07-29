import { TestBed } from '@angular/core/testing';

import { CityStorageService } from './city-storage.service';

describe('CityStorageService', () => {
  let service: CityStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
