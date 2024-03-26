import { TestBed } from '@angular/core/testing';

import { StringOperationsService } from './string-operations.service';

describe('StringOperationsService', () => {
  let service: StringOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StringOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
