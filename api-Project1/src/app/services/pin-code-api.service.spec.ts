import { TestBed } from '@angular/core/testing';

import { PinCodeAPIService } from './pin-code-api.service';

describe('PinCodeAPIService', () => {
  let service: PinCodeAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PinCodeAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
