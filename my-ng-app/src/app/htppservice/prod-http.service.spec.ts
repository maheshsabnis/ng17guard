import { TestBed } from '@angular/core/testing';

import { ProdHttpService } from './prod-http.service';

describe('ProdHttpService', () => {
  let service: ProdHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProdHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
