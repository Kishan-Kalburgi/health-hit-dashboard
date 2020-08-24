import { TestBed } from '@angular/core/testing';

import { HealthitService } from './healthit.service';

describe('HealthitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HealthitService = TestBed.get(HealthitService);
    expect(service).toBeTruthy();
  });
});
