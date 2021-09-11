import { TestBed } from '@angular/core/testing';

import { JsonReadService } from './json-read.service';

describe('JsonReadService', () => {
  let service: JsonReadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonReadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
