import { TestBed } from '@angular/core/testing';

import { PutrequestService } from './putrequest.service';

describe('PutrequestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PutrequestService = TestBed.get(PutrequestService);
    expect(service).toBeTruthy();
  });
});
