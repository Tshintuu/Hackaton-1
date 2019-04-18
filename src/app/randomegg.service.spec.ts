import { TestBed } from '@angular/core/testing';

import { RandomeggService } from './randomegg.service';

describe('RandomeggService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomeggService = TestBed.get(RandomeggService);
    expect(service).toBeTruthy();
  });
});
