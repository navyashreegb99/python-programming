import { TestBed } from '@angular/core/testing';

import { OfficeLocService } from './office-loc.service';

describe('OfficeLocService', () => {
  let service: OfficeLocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OfficeLocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
