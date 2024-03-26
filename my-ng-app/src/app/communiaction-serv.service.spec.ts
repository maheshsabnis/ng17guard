import { TestBed } from '@angular/core/testing';

import { CommuniactionServService } from './communiaction-serv.service';

describe('CommuniactionServService', () => {
  let service: CommuniactionServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommuniactionServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
