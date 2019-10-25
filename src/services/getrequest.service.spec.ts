import { TestBed } from '@angular/core/testing';

import { GetrequestService } from './getrequest.service';

describe('GetrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetrequestService = TestBed.get(GetrequestService);
    expect(service).toBeTruthy();
  });
});
