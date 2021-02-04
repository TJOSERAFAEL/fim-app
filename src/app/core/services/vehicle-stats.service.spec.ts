import { TestBed } from '@angular/core/testing';

import { VehicleStatsService } from './vehicle-stats.service';

describe('VehicleStatsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VehicleStatsService = TestBed.get(VehicleStatsService);
    expect(service).toBeTruthy();
  });
});
