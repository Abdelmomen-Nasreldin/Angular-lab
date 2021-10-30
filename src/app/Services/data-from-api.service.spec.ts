import { TestBed } from '@angular/core/testing';

import { DataFromApiService } from './data-from-api.service';

describe('DataFromApiService', () => {
  let service: DataFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
