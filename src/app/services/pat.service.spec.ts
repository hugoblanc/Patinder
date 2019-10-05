import { TestBed } from '@angular/core/testing';

import { PatService } from './pat.service';

describe('PatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PatService = TestBed.get(PatService);
    expect(service).toBeTruthy();
  });
});
