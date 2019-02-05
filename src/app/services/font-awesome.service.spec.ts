import { TestBed } from '@angular/core/testing';

import { FontAwesomeService } from './font-awesome.service';

describe('FontAwesomeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FontAwesomeService = TestBed.get(FontAwesomeService);
    expect(service).toBeTruthy();
  });
});
