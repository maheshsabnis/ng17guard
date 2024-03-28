import { TestBed } from '@angular/core/testing';

import { BFFService } from './bff.service';

describe('BFFService', () => {
  let service: BFFService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BFFService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
