import { TestBed } from '@angular/core/testing';

import { RandomenmyService } from './randomenmy.service';

describe('RandomenmyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RandomenmyService = TestBed.get(RandomenmyService);
    expect(service).toBeTruthy();
  });
});
